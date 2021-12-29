/* Author: Kacy*/
//Import Library Dependencies
import React from 'react'
import Card from './Card.jsx'


class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='rItemsCompare'>
        rItemsCompare
        <div className='relatedProducts'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className='favoriteProducts'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

    )
  }
}
export { RelatedProducts }
