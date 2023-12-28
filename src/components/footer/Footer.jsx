import React from 'react'
import '../../css/odin.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
       <div className="container-fluid">
  <div className="container main-7">
    
       <div className='onlyabout'> <h4>Support us!</h4>
    <div className="main-7-text">The Odin Project is funded by the community. Join us in empowering learners around the globe by supporting The Odin Project!</div>
     <div className="main-7-button">
      <button className="main-7-button-1">Learn more</button>
      <button className="main-7-button-2">
        <div >Donate now</div> 
        <div ><i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
      </button>
     </div></div>
    

     <div className="footer">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 footer-sub-1">
          <div className="navbar-logo">
            <div><a href=""><img src="./odin-icon-a34029cd84a741be4da27758dafd7d7ac3729021adea3e0701e310d91e5c1d04.svg" alt="" /></a></div>
            <div className="nav-head"><a href="">THE ODIN PROJECT</a></div>
          </div>
          <div className="footer-sub-1-text">High quality coding education maintained by an open source community.</div>
          <div className="footer-sub-1-icon">
            <div><i className="fa fa-github" aria-hidden="true"></i></div>
            <div><i className="fa fa-instagram" aria-hidden="true"></i></div>
            <div><i className="fa fa-facebook" aria-hidden="true"></i></div>
            <div><i className="fa fa-twitter" aria-hidden="true"></i></div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 footer-sub">
          <div className="footer-sub-head">About us</div>
          <div><a href="">About</a></div>
          <div><a href="">Blog</a></div>
          <div><a href="">Success Stories</a></div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 footer-sub">
          <div className="footer-sub-head">Support</div>
          <div><a href="">FAQ</a></div>
          <div><a href="">Contribute</a></div>
          <div><a href="">Contact us</a></div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 footer-sub">
          <div className="footer-sub-head">Guides</div>
          <div><a href="">Community guides</a></div>
          <div><a href="">Installation guides</a></div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 footer-sub">
          <div className="footer-sub-head">Legal</div>
          <div><a href="">Terms</a></div>
          <div><a href="">Privacy</a></div>
        </div>
      </div>
     </div>
     <div className="footer-bottom-border">
     </div>
     <div className="copyright">© 2023 The Odin Project. All rights reserved.</div>


  </div>
  

 </div>

 




</div>



   
  )
}

export default Footer
