import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const date = new Date();

const styles = (theme) => ({
  footer: {
    alignItems: "center",
  }
});
const pColorStyle={
	color:'#fff',
};
const Footer = ({ ...props }) => (
  <footer className="footer">
	  {/* <div className="row">
		  <h1>asdasdasd</h1>
	  </div> */}
	<div className="container-fluid px-lg-5">
			<div className="row">
				<div className="col-md-9 py-5">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-12 col-12  mb-md-0 mb-4">
							<h2 className="footer-heading">CONTACT US </h2>
							<ul className="list-unstyled">
									<li><a href="#" className="py-1 d-block">+44 345 678 903</a></li>
									<li><a href="#" className="py-1 d-block">HPCandy@gmail.com</a></li>
									<li><a href="#" className="py-1 d-block">Find a store</a></li>
								</ul>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-md-0 mb-4">
							<h2 className="footer-heading">CUSTOMER SERVICE</h2>
							<ul className="list-unstyled">
									<li><a href="#" className="py-1 d-block">Contact us</a></li>
									<li><a href="#" className="py-1 d-block">Ordering & payment</a></li>
									<li><a href="#" className="py-1 d-block">Shipping</a></li>
									<li><a href="#" className="py-1 d-block">Returns</a></li>
									<li><a href="#" className="py-1 d-block">FAQ</a></li>
							</ul>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 col-12 mb-md-0 mb-4">
							<h2 className="footer-heading">PAGE</h2>
							<ul className="list-unstyled">
									<li><a href="#" className="py-1 d-block">Help Center</a></li>
									<li><a href="#" className="py-1 d-block">Privacy Policy</a></li>
									<li><a href="#" className="py-1 d-block">Terms &amp; Conditions</a></li>
									<li><a href="#" className="py-1 d-block">Press Enquiries</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 col-12 py-md-5 py-4 pl-lg-5">
					<p style={pColorStyle}>Subscribe to Horsepower Candy & get special offers & savings!</p>
					<input type="email" className="form-control subscribe-formn2" id="email" placeholder="Enter email" name="email"/>
					<button type="submit" className="btn subscribe-button-footer">Submit</button>
				</div>
			</div>
		</div> 
    {/* <Typography variant="caption">
      &copy; {date.getFullYear()} Reaction Commerce ddd
    </Typography> */}
      {/* &copy; {date.getFullYear()}  Commerce ddd */}

  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
