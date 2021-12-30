import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import ReactDOM from 'react-dom'

componentDidMount() {
  let that = this;
  axios.get(`/products/${this.state.product_id}/styles`, {
    params: {
      productId: this.state.product_id
    }
})
  .then(function (response) {
    // handle success
    // console.log('RESPONSEEEEEE: ', response.data)
    console.log(response.data);
    that.setState({currentProduct: response.data})
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}