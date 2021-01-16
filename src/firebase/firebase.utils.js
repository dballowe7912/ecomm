import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAxZ2HmbCWqUF9XnVlPGW-zuTt3TAgm2nU",
    authDomain: "ecommerce-app-501d2.firebaseapp.com",
    projectId: "ecommerce-app-501d2",
    storageBucket: "ecommerce-app-501d2.appspot.com",
    messagingSenderId: "175201055537",
    appId: "1:175201055537:web:cc44d61beede34aae6f610",
    measurementId: "G-P30KY00D2L"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
