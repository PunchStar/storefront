import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { NavigationDesktop } from "components/NavigationDesktop";
import { NavigationMobile, NavigationToggleMobile } from "components/NavigationMobile";
import AccountDropdown from "components/AccountDropdown";
import ShopLogo from "@reactioncommerce/components/ShopLogo/v1";
import Link from "components/Link";
import MiniCart from "components/MiniCart";

const styles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.reaction.white,
    borderBottom: `solid 1px ${theme.palette.reaction.black05}`,
    color: theme.palette.reaction.coolGrey500
  },
  controls: {
    alignItems: "inherit",
    display: "inherit",
    flex: 1
  },
  title: {
    color: theme.palette.reaction.reactionBlue,
    marginRight: theme.spacing.unit,
    borderBottom: `solid 5px ${theme.palette.reaction.reactionBlue200}`
  },
  toolbar: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  }
});

@withStyles(styles, { name: "SkHeader" })
@inject("uiStore")
class Header extends Component {
  static propTypes = {
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    uiStore: PropTypes.shape({
      toggleMenuDrawerOpen: PropTypes.func.isRequired
    }).isRequired,
    viewer: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  handleNavigationToggleClick = () => {
    this.props.uiStore.toggleMenuDrawerOpen();
  };

  render() {
    const { classes: { appBar, controls, toolbar, title }, shop } = this.props;

    return (
      <div>
        
              <div className="wrap-top1">
                 <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                        <form action="#" className="order-sm-start order-lg-last">
                          <div className="help-cenet-icontop1">
                            <a><i className="fa fa-question-circle help-center-icon"> Help Center</i></a>
                            <a><i className="fa fa-commenting help-center-icon"> Support</i></a>
                          </div>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap">
                <div className="container">	
                  <div className="row">
                    <div className="col-md-12">
                      <div className="bg-wrap">
                        <div className="row">
                          <div className="col-md-3 d-flex align-items-center">
                          <Link route={`/`}><a >
                              <img src="/static/images/logo.png" className="logo-img"/>
                            </a></Link>
                          </div> 
                          <div className="col-md-2 d-flex align-items-center2n">						
                            <select name="cars" className="custom-select">
                              <option selected>All Category</option>
                              <option value="volvo">Page 1</option>
                              <option value="fiat">Page 2</option>
                              <option value="audi">Page 3</option>
                            </select>
                          </div>
                          <div className="col-md-3 d-flex align-items-center2n">	
                            <input type="text" className="input-serch1" placeholder="Search.." name="search"/>
                            <button className="input-serch2" type="submit"><i className="fa fa-search"></i></button>
                          </div>
                          <div className="col-md-1 col-sm-12 d-flex">
                          </div>
                          <div className="col-md-3 col-sm-12 d-flex">
                            <div className="social-media">
                              <p className="mb-0 english-world">
                                <Link route={`/productGrid`}><a><i className="fa fa-heart help-center-icon2n"> Wish List</i></a></Link>
                                <Link route={`/login`}><a><button type="button" className="btn sign-button">SIGN IN</button></a></Link>
                                <Link route={`/cart`}><a><i className="fa fa-shopping-cart shoping-cart-icon" aria-hidden="true"></i></a></Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> Menu
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	       <div className="dropdown">
           <button className="btn dropdown-menu-topm dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Products
           </button>
           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <a className="dropdown-item" href="#">Action</a>
           <a className="dropdown-item" href="#">Another action</a>
           <a className="dropdown-item" href="#">Something else here</a>
           </div>
           </div>

           <div className="dropdown">
           <button className="btn dropdown-menu-topm dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Brands
           </button>
           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
           <a className="dropdown-item" href="#">Action</a>
           <a className="dropdown-item" href="#">Another action</a>
           <a className="dropdown-item" href="#">Something else here</a>
           </div>
           </div>

            <div className="dropdown">
           <button className="btn dropdown-menu-topm dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Deals
           </button>
           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
           <a className="dropdown-item" href="#">Action</a>
           <a className="dropdown-item" href="#">Another action</a>
           <a className="dropdown-item" href="#">Something else here</a>
           </div>
           </div>

           </div>
	      </div>
	  </nav>
	  <div className="container">
        <div className="row">
             <div className="col-lg-3 col-md-3 col-sm-3 col-12">
           	 <div className="slider-bottom-form">
              <select name="cars" className="custom-select">
                 <option selected>Engine/Mfg</option>
                 <option value="volvo">Page 1</option>
                 <option value="fiat">Page 2</option>
                 <option value="audi">Page 3</option>
              </select>
            </div>
          </div>
           <div className="col-lg-3 col-md-3 col-sm-3 col-12">
           	 <div className="slider-bottom-form">
              <select name="cars" className="custom-select">
                 <option selected>Engine Family</option>
                 <option value="volvo">Page 1</option>
                 <option value="fiat">Page 2</option>
                 <option value="audi">Page 3</option>
              </select>
           </div>
          </div>
           <div className="col-lg-3 col-md-3 col-sm-3 col-12">
           	 <div className="slider-bottom-form">
              <select name="cars" className="custom-select">
                 <option selected>Engine Size</option>
                 <option value="volvo">Page 1</option>
                 <option value="fiat">Page 2</option>
                 <option value="audi">Page 3</option>
              </select>
           </div>
          </div>
           <div className="col-lg-3 col-md-3 col-sm-3 col-12">
           	 <div className="slider-bottom-form">
              <button type="button" className="btn search-engin-button">Search</button>
              <button type="button" className="btn search-engin-button2">Clear all</button>
            </div>
          </div>
        </div>
	  </div>
      </div>
    );
  }
}

export default Header;
