import React from 'react';

const Footer = () => {
  return (<div className="footer">
    <div className="img"></div>
    <div className="row text-center text-md-left mt-3 pb-3">
      <div className="afterBox col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Galvanize Snacks</h6>
        <p>Here you can explore all the different snacks and compare how they would be as a Dip or even a Dipping Tool.</p>
      </div>
      <div className="afterBox col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
        <p>
          <a href="#!">Snacks</a>
        </p>
        <p>
          <a href="#!">Dips</a>
        </p>
        <p>
          <a href="#!">Judgement</a>
        </p>
      </div>
      <div className="afterBox col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>
      </div>
      <div className="afterBox col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i className="fa fa-home mr-3"></i>Galvanize</p>
        <p>
          <i className="fa fa-envelope mr-3"></i>
          info@gmail.com</p>
        <p>
          <i className="fa fa-phone mr-3"></i>
          + 01 234 567 88</p>
        <p>
          <i className="fa fa-print mr-3"></i>
          + 01 234 567 89</p>
      </div>
    </div>
  </div>)
}

export default Footer
