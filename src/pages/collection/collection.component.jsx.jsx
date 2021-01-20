import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollections } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2>Collection Page</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollections(ownProps.match.params.collectionId)
})

export default connect(mapStateToProps)(CollectionPage);