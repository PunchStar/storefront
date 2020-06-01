import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import withCatalogItems from "containers/catalog/withCatalogItems";
import trackProductListViewed from "lib/tracking/trackProductListViewed";
import $ from "jquery";
@withCatalogItems
@inject("routingStore", "uiStore")
@observer
class HomePage extends Component {
  componentDidMount() {
    $(function () {
        $("#myCarousel").on("slide.bs.carousel", function(e) {
          var $e = $(e.relatedTarget);
          var idx = $e.index();
          var itemsPerSlide = 3;
          var totalItems = $("#myCarousel .carousel-item").length;
      
          if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
              // añade cards al final
              if (e.direction == "left") {
                $("#myCarousel .carousel-item")
                  .eq(i)
                  .appendTo("#myCarousel .carousel-inner");
              } else {
                $("#myCarousel .carousel-item")
                  .eq(0)
                  .appendTo($(this).find(".carousel-inner"));
              }
            }
          }
        });
        $("#myCarousel1").on("slide.bs.carousel", function(e) {
          var $e = $(e.relatedTarget);
          var idx = $e.index();
          var itemsPerSlide = 3;
          var totalItems = $("#myCarousel1 .carousel-item").length;
      
          if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
      
            for (var i = 0; i < it; i++) {   
              if (e.direction == "left") {
                $("#myCarousel1 .carousel-item")
                  .eq(i)
                  .appendTo("#myCarousel1 .carousel-inner");
              } else {
                $(".carousel-item")
                  .eq(0)
                  .appendTo($(this).find(".carousel-inner"));
              }
              
            }
          }
        }); 
    });

  }
  render() {
    const h2Style = {
      textAlign: 'left',
    };
    const pViewAllStyle={
      marginTop: '45px',
      textAlign: 'right',
      color: '#44a9e8',
      fontSize: '17px',
    }
    const h2TopStyle={
      marginTop:'45px',
    }
    const backStyle1 = {
      backgroundImage: 'url(/static/images/bg_1.jpg)',
    };
    const backStyle2 = {
      backgroundImage: 'url(/static/images/bg_2.jpg)',
    };
    const backStyle3 = {
      backgroundImage: 'url(/static/images/bg_3.jpg)',
    };
    const backimg1Style = {
      backgroundImage: 'url(/static/images/image_1.jpg)',
    };
    const backimg2Style = {
      backgroundImage: 'url(/static/images/image_2.jpg)',
    };
    const backimg3Style = {
      backgroundImage: 'url(/static/images/image_3.jpg)',
    };
    const backimg4Style = {
      backgroundImage: 'url(/static/images/image_4.jpg)',
    };
    const backimg5Style = {
      backgroundImage: 'url(/static/images/image_5.jpg)',
    };
    const backimg6Style = {
      backgroundImage: 'url(/static/images/image_6.jpg)',
    };
    const backimg7Style = {
      backgroundImage: 'url(/static/images/image_7.jpg)',
    };
    const backimg8Style = {
      backgroundImage: 'url(/static/images/image_8.jpg)',
    };
    const backimg9Style = {
      backgroundImage: 'url(/static/images/image_9.jpg)',
    };
    return (
      <Fragment>
      <div className="hero-wrap">
	    <div className="home-slider owl-carousel">
	      <div className="slider-item" style={backStyle1}>
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row no-gutters slider-text align-items-center justify-content-center">
		          <div className="col-md-8 ftco-animate">
		          	<div className="text w-100 text-center">
			            <h1 className="mb-4">CHOOSE YOUR CANDY</h1>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>
	      <div className="slider-item" style={backStyle2}>
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row no-gutters slider-text align-items-center justify-content-center">
		          <div className="col-md-8 ftco-animate">
		          	<div className="text w-100 text-center">
			             <h1 className="mb-4">CHOOSE YOUR CANDY</h1>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>
	      <div className="slider-item" style={backStyle3}>
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row no-gutters slider-text align-items-center justify-content-center">
		          <div className="col-md-8 ftco-animate">
		          	<div className="text w-100 text-center">
			            <h1 className="mb-4">CHOOSE YOUR CANDY</h1>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>
	    </div>
	  </div>
      <section className="ftco-section testimony-section bg-light">
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 heading-section-n2 heading-section-white text-center ftco-animate">
                <h2 style={h2Style}>Most Searched parts</h2>
              </div>
        
            </div>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel ftco-owl">
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <img src="/static/images/slider1.jpg"/>
                      <h5>Truck/SUV</h5>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <img src="/static/images/slider2.jpg"/>
                      <h5>Shop Stock Replacement</h5>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <img src="/static/images/slider3.jpg"/>
                      <h5>Performance Parts</h5>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <img src="/static/images/slider4.jpg"/>
                      <h5>Powersports</h5>
                    </div>
                  </div>

                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <img src="/static/images/slider3.jpg"/>
                      <h5>Performance Parts</h5>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
       </section>

       <div className="slider-3-magin">
 <div className="container">
  <div className="row justify-content-center mb-3">
     <div className="col-md-12 heading-section text-center ftco-animate">
        <h2>Recommended for you</h2>
   </div>
   </div>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner row w-100 mx-auto">
      <div className="carousel-item col-md-4 active">
        <div className="card">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg2Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">Valvoline VR1 Racing Motor<br/> Oil</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$37.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
          </div>
        </div>


      <div className="carousel-item col-md-4">
        <div className="card">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg1Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">Summit Racing Hydraulic Lifters SUM-HT817</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
        </div>
      </div>

      <div className="carousel-item col-md-4">
        <div className="card">
         <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg3Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">COMP Cams Magnum Double Roller Timing Sets</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$34.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
        </div>
      </div>

      <div className="carousel-item col-md-4">
        <div className="card">
          <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg4Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">COMP Cams High Energy Hydraulic Lifters 812-16</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
        </div>
      </div>

     <div className="carousel-item col-md-4">
        <div className="card">
          <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg1Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">COMP Cams High Energy Hydraulic Lifters 812-16</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
        </div>
      </div>

     <div className="carousel-item col-md-4">
        <div className="card">
          <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg1Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">COMP Cams High Energy Hydraulic Lifters 812-16</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
        </div>
      </div>

     <div className="carousel-item col-md-4">
        <div className="card">
          <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg3Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">COMP Cams High Energy Hydraulic Lifters 812-16</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
</div>
<section className="ftco-section ftco-no-pb ftco-no-pt bg-secondary">
      <div className="container py-5">
    	 <div className="row">
          <div className="col-md-12">
            <h2 className="most-popular-heading">Most Popular Parts</h2>
          </div>
          </div>
         <div className="row">
          <div className="col-md-3 align-items-center">
            <div className="testimony-wrap-2 py-4">
                	<img src="/static/images/slider1.jpg"/>
                	<h5>Truck/SUV</h5>
                </div>
          </div>

           <div className="col-md-3 align-items-center">
            <div className="testimony-wrap-2 py-4">
                <img src="/static/images/slider2.jpg"/>
               	<h5>Shop Stock Replacement</h5>
                </div>
          </div>

           <div className="col-md-3 align-items-center">
            <div className="testimony-wrap-2 py-4">
               	<img src="/static/images/slider3.jpg"/>
               	<h5>Performance Parts</h5>
                </div>
          </div>

           <div className="col-md-3 align-items-center">
            <div className="testimony-wrap-2 py-4">
                <img src="/static/images/slider4.jpg"/>
               	<h5>Powersports</h5>
                </div>
          </div>

            <a href="#"><button type="button" className="btn most-popular-button">View All</button></a>

        </div>
      </div>
    </section>



    <section className="ftco-section bg-light">
    	<div className="container">
    		<div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-6 heading-section text-center ftco-animate">
            <h2 style={h2TopStyle}>Top Seller</h2>
          </div>
           <div className="col-md-6 heading-section text-center ftco-animate">
            <a href="#"><p style={pViewAllStyle}>View all</p></a>
          </div>
        </div>

           <div className="row d-flex">
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg9Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">Duralast Coolant Temperature Sensor SU102</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg8Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">Comp Cams-Solid/Mechanical Lifters</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg7Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">MSD- Pro-Billet Distributor</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$373.95</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
          </div>

           <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg6Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">ARP - Cylinder Head Bolt Kit</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$37.99</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
          </div>

        </div>

          <div className="row d-flex">
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg5Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">Comp Cams - High Energy Camshaft</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg4Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">COMP Cams High Energy Hydraulic Lifters 812-16</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg3Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">COMP Cams Magnum Double Roller Timing Sets</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
              
                </div>
               
              </div>
            </div>
          </div>

           <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="#" className="block-20 rounded" style={backimg2Style}>
              </a>
              <div className="text p-4">
              	<div className="meta mb-2">
              	  <h3 className="heading"><a href="#">Valvoline VR1 Racing Motor Oil</a></h3>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> </a></div>
              	  <div><a href="#" className="meta-chat"><span className="fa fa-star"></span> (4.3/5)</a></div>
                  <div><a href="#">Estimated Ship Date: 10/16/2019</a></div>
                  <div><a href="#"><b>$705.31</b></a></div>
                  <a href="#"><button type="button" className="btn search-engin-button">Add to Cart</button></a>
                </div>
              </div>
            </div>
          </div>

        </div>
    	</div>
    </section>

     <section className="footer-top">
      <div className="container py-5">
         <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="footer-top-div1">
              <h3>Savings to take you <br/>the extra mile</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
              <a href="#"><button type="button" className="btn footer-top-button">Learn More</button></a>	
            </div>
          </div>
           <div className="col-md-6 d-flex align-items-center">
            <div className="footer-top-div2">
                <img src="/static/images/footer-top-img.jpg"/>
                </div>
          </div>
        </div>
      </div>
    </section>
      </Fragment>
    );
  }
}

export default HomePage;
