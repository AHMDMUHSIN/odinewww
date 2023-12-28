import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/odin.css'

const Navbar = () => {
  return (
    <div>
        <div className="container-fluid navbar-main">
    <div className="container">
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
              <div className="navbar-logo">
                <div><a href=""><Link to='/'><img src="./odin-icon-a34029cd84a741be4da27758dafd7d7ac3729021adea3e0701e310d91e5c1d04.svg" alt="" /></Link></a></div>
                <div className="nav-head"><a href=""></a> <Link to='/'>THE ODIN PROJECT</Link></div>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse navbar-item" id="navbarNav">
                <div >
                    <a className="nav-link active" aria-current="page" href="./templates/All paths.html"><span>All Paths</span></a>
                </div>
                <div>
                    {/* <a className="nav-link active" aria-current="page" href="./templates/about.html"><span>About</span></a> */}
                    <Link className="nav-link active" to='/about'><span>About</span></Link>
                </div>
                <div>
                    <a className="nav-link active" aria-current="page" href="https://discord.com/invite/fbFCkYabZB"><span>Community</span></a>
                </div>
                <div>
                    <a className="nav-link active" aria-current="page" href="./templates/support us.html"><span>Support us</span></a>
                </div>
                <div>
                    {/* <a className="nav-link active" aria-current="page" href="./templates/sign in.html"><span>Sign in</span></a> */}
                    <Link className="nav-link active" to='/contact'><span>Sign in</span></Link>
                </div>
                <div >
                    <a className="nav-link active" aria-current="page" href="#"><ion-icon name="sunny-outline" className="light-mode-icon"></ion-icon></a>
                </div>
                <div>
                    <a className="nav-link active" aria-current="page" href="#"><button>Get Started</button></a>
                </div>
    
              </div>
            </div>
          </nav>
    </div>
   </div>

   <div>
    <div className="container navbar-for-md">
    <div className="navbar-md-logo">
      <a href=""><img src="./odin-icon-a34029cd84a741be4da27758dafd7d7ac3729021adea3e0701e310d91e5c1d04.svg" alt="" /></a>
    </div>
    <div className="navbar-md-logo">
      <a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <div className="navbar-md-logo-i"><i className="fa fa-bars" aria-hidden="true"></i></div>
      </a>
      
      <div className="offcanvas offcanvas-start"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <div className="navbar-logo">
              <div><a href=""><img src="./odin-icon-a34029cd84a741be4da27758dafd7d7ac3729021adea3e0701e310d91e5c1d04.svg" alt="" /></a></div>
              <div className="nav-head"><a href="">THE ODIN PROJECT</a></div>
            </div>
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
           <div className="navbar-md-item " id="active-btnfor-md">
            <div><a href=""><span className="material-symbols-outlined">
              home_app_logo
              </span></a>
            </div>
            <div><a href="">Home</a></div>
           </div>
           <div className="navbar-md-item">
            <div><a href="./templates/All paths.html"><span className="material-symbols-outlined">
              conversion_path
              </span></a></div>
            <div><a href="./templates/All paths.html">All Paths</a></div>
           </div>
           <div className="navbar-md-item">
            <div><a href="./templates/about.html"><span className="material-symbols-outlined">
              info
              </span></a></div>
            <div><a href="./templates/about.html">About</a></div>
           </div>
           <div className="navbar-md-item">
            <div><a href="./templates/support us.html"><span className="material-symbols-outlined">
              favorite
              </span></a></div>
            <div><a href="./templates/support us.html">Support Us</a></div>
           </div>
           <div className="navbar-md-item">
            <div><a href=""><span className="material-symbols-outlined">
              forum
              </span></a></div>
            <div><a href="https://discord.com/invite/fbFCkYabZB">Community</a></div>
           </div>
           <div className="navbar-md-item">
            <div><a href=""><span className="material-symbols-outlined">
              rocket_launch
              </span></a></div>
            <div><a href="./templates/sign in.html">Get started</a></div>
           </div>
           <div className="navbar-md-item">
            <div><a href=""><span className="material-symbols-outlined">
              light_mode
              </span></a></div>
            <div><a href="">Light mode</a></div>
           </div>
           <div className="navbar-md-item">
            <div><a href=""><span className="material-symbols-outlined">
              login
              </span></a></div>
            <div><a href="./templates/sign in.html">Sign in</a></div>
           </div>
        </div>
      </div>
    </div>

   </div>

 </div>
 <div className="sm-navbar-border"></div>



    </div>
  )
}

export default Navbar
