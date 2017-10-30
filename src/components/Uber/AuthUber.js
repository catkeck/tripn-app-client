import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AuthUberActions from '../../actions/uber'
import UberProduct from './UberProduct'

class AuthUber extends React.Component {

  constructor() {
    super()
    this.state = {
      currentLatitude: "",
      currentLongitude: "",
      desiredLatitude: "",
      desiredLongitude: ""
    }
  }

  componentDidMount() {
    this.setState({
      currentLatitude: localStorage.getItem("CurrentLocationLatitude"),
      currentLongitude: localStorage.getItem("CurrentLocationLongitude"),
      desiredLatitude: localStorage.getItem("DesiredLocationLatitude"),
      desiredLongitude: localStorage.getItem("DesiredLocationLongitude"),
      code: this.props.code.location.search.split("=")[1]
    })
    this.props.getToken(this.props.code.location.search.split("=")[1])
  }

  componentWillReceiveProps(nextProps){
     if(nextProps.accessToken!==this.props.accessToken && nextProps.accessToken.access_token && nextProps.accessToken.access_token.length > 1){
      this.props.getProducts(nextProps.accessToken.access_token, this.state.currentLatitude, this.state.currentLongitude)
    }
  }  

  render() { 
    if (this.props.products && this.props.products.length > 0 && this.props.accessToken.access_token.length > 0 ) {
      return(
        <div>
          <div id="home">
            <img src='../travel.jpg' alt=''/>
          </div>
          <div className="product-cards">            
           {this.props.products.map(product => <UberProduct 
            display_name={product.display_name}
            image={product.image}
            capacity={product.capacity}
            description={product.description}
            price_details={product.price_details}
            product_group={product.product_group}
            product_id={product.product_id}
            token={this.props.accessToken.access_token}
            currentLatitude={this.state.currentLatitude}
            currentLongitude={this.state.currentLongitude}
            desiredLatitude={this.state.desiredLatitude}
            desiredLongitude={this.state.desiredLongitude}/>)} </div>
        </div>
      )
    } else {
      return (
        <div><img src="Cube.svg" alt=""/></div>
      )
    }
  }

}


function mapStateToProps(state) {
  return {
    costs: state.uber.costs,
    accessToken: state.uber.access_token,
    products: state.uber.products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuthUberActions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthUber)