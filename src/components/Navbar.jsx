import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    
    <header>
       <Link to="/"><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="Header" /></Link> 
       <br />
      <Link to="/beers">All Beers</Link>
      <br />

      <Link to="/random">Random Beer</Link>

      <br />
      <Link to="/newbeer">New Beer</Link>

    
    </header>
    
    
  )
}

export default Navbar