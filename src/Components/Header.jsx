import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"black"}}>
  <div className="container-fluid confld">
    <a className="navbar-brand" href="#" style={{color:"white"}} >Navbar</a>
   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" style={{color:"gray",marginLeft:100}} aria-current="page" href="#">Home</a>
        <a className="nav-link ml-4" href="#" style={{color:"gray"}}>Advantages</a>
        <a className="nav-link ml-4" href="#" style={{color:"gray"}}>Pricing</a>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header
