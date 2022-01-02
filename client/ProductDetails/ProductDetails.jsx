/* Author: */
//Import Library Dependencies
import React from 'react'
import {ProductGallery} from './ProductGallery.jsx'
import {onloadState, productMainInfo, skuArray, getSkuInfo} from './OnLoadData.js'
import $ from 'jquery'
import axios from 'axios'




class ProductDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productMainInfo: productMainInfo,
      productInfo: onloadState,
      currentStylePhotos: onloadState[0].style_photos,
      currentStyle: onloadState[0],
      styleSkus: [{quantity: 14, sizes: "7", sku: "1281202"}],
      currentQuantity: 1,
      currentSize: 7,
      itemsInStock: [1, 2, 3, 4]
  }
  this.componentDidMount = this.componentDidMount.bind(this)
  this.componentDidUpdate = this.componentDidUpdate.bind(this)
  this.handleChange = this.handleChange.bind(this)
}

componentDidMount() {
  let productID = this.props.product_id;
  let that = this;
  //get styles
  axios.get(`/products/${productID}/styles/details`, {
    params: {
      productId: productID,
    }
  })
  .then(function(response) {
    that.setState({
      productInfo: response.data,
      currentStylePhotos: response.data[0].style_photos,
      currentStyle: response.data[0],
      styleSkus: getSkuInfo(response.data)
    })
  })
  .catch(function(error) {
    console.log('ERROR FROM GET STYLES: ', error)
  })

}


componentDidUpdate(prevProps) {
  if (this.props.product_id !== prevProps.product_id) {
    let productID = this.props.product_id;
    let that = this;
    //get styles
    axios.get(`/products/${productID}/styles/details`, {
      params: {
        productId: productID,
      }
    })
    .then(function(response) {
      that.setState({
        productInfo: response.data,
        currentStylePhotos: response.data[0].style_photos,
        currentStyle: response.data[0],
        styleSkus: getSkuInfo(response.data)
      })
    })
    .catch(function(error) {
      console.log('ERROR FROM GET STYLES: ', error)
    })
  }
}


handleChange(event) {
  let that = this;
  that.setState({currentSize: event.target.value});
}





render() {
  let skuArr = [];
  let productCategory = this.state.productMainInfo.category;
  let productName = this.state.productMainInfo.name;
  let productSlogan = this.state.productMainInfo.slogan;
  let productDescription = this.state.productMainInfo.description;
  let productFeatures = this.state.productMainInfo.features;
  let currentStylePhotos = this.state.currentStylePhotos;

  //utility variables
  let styleThumbnails = this.state.productInfo;
  let entryList = Object.entries(this.state.currentStyle);
  let skuObj = entryList[3][1];
  let productSize = this.state.currentSize;
  let productSizeString = null;


  if (typeof productSize === "number") {
    productSizeString = JSON.stringify(productSize)
  } else {
    productSizeString = productSize
  }

  //utility functions
  for (let item in skuObj) {
            skuArr.push({
                sku: item,
                quantity: skuObj[item].quantity,
                sizes: skuObj[item].size
            })
        };

  let maxQuantity = 0;
  let quantities = [];
  console.log("INSIDE OF s2q function");
  console.log("this.state.styleSkus: ", this.state.styleSkus);
  for (let i = 0; i < this.state.styleSkus.length; i++) {
    console.log('this.state.styleSkus[i].sizes: ', this.state.styleSkus[i].sizes)
    console.log("PRODUCT SIZE: ", productSizeString)
    if (this.state.styleSkus[i].sizes === productSizeString) {
        console.log('this.state.styleSkus[i].sizes: ', this.state.styleSkus[i].sizes)
          maxQuantity = this.state.styleSkus[i].quantity
      }
  }
  for (let i = 1; i <= maxQuantity; i++) {
    console.log('MAKING QUANTITIES: ', quantities)
      quantities.push(i)
  }

  //listing functions/
  let styleThumbnailCircles = styleThumbnails.map(style => {
    return <img src={style.style_photos[0].thumbnail} className="selectStyle"></img>
  });

  let featuresBullets = productFeatures.map(feature => {
    return <li>{feature.feature}: {feature.value}</li>
  })

  let styleSizeList = this.state.styleSkus.map((sku, i) => {
    return <option value={sku.sizes}>{sku.sizes}</option>
  })
  let styleQuantityList = quantities.map((quantitySelected, i) => {
    console.log('NEW QUANTITY: ', quantitySelected)
    return <option value={quantitySelected}>{quantitySelected}</option>
  })



return (
  <div className="overviewWrapper">overviewWrapper
  <div className="overviewProductDescriptionContainer">
    <div className="overviewImageGallery">
    <ProductGallery currentStylePhotos={currentStylePhotos} className="overviewImageGallery" />
    </div>
    <div className="overviewInformationContainer">
      <div className="overviewReviews">
        overviewReviews
      </div>
      <div className="overviewNameAndCat">
        <h4 className="category">{productCategory}</h4><br/>
        <h2><strong>{productName}</strong></h2>
      </div>
      <div className="overviewStyle">
      {styleThumbnailCircles}
      </div>
      <div className="overviewSizeSelector">
      <select className="btn selectSize" onChange={this.handleChange}>
  {styleSizeList}
</select>
  <select>
  {styleQuantityList}
</select>
      </div>
      <div className="overviewBagAndStar">
        <button className="btn addToBag">ADD TO BAG</button>
        <button className="btn star">STAR</button>
      </div>
    </div>
  </div>
  <div className="overviewProductDescriptionContainer">
    <div className="overviewDescriptionText">
      <h5 className="slogan">{productSlogan}</h5>
      <p className="productDescription">{productDescription}</p>
    </div>
    <div className="overviewDescriptionChecklist">
      <ul className="productFeatures">
        {featuresBullets}
      </ul>
    </div>
  </div>
</div>
)
}
}

export {ProductDetails}