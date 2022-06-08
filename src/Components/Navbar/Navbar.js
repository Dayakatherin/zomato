import React from 'react'
import './Navbar.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Navbar() {
  return (

<div>              
            <nav>
                <input id="nav-toggle" type="checkbox" /> 
                <i style={{color:"white"}} id="cart-icon" class="fa fa-mobile"></i>
                    <ul class="links">
                        <li><a href="#get" id="get">Get the app</a></li>
                        <li><a href="#about">Investors Relations</a></li>
                        <li><a href="#work">Add Restaurant</a></li>
                        <li><a href="#projects">Login</a></li>
                        <li><a href="#projects">Sign Up</a></li>
                    </ul>
                    <label for="nav-toggle" class="icon-burger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </label>
                <h1 className='head'>Zomato</h1>
                <h2 className='head1'>Discover the best food & drinks in Kochi</h2>
                <button className='search'>
                <i id="map" class="fa fa-map-marker" aria-hidden="true"></i> <h5>Kochi</h5><i id="down" class="fa fa-caret-down" aria-hidden="true"></i> <div class="vl"></div> <i id="search1" class="fa fa-search" aria-hidden="true"></i> <h6>Search for Restaurant, cuisine or a dish</h6> 
                </button>
            </nav>  

          <div className="card">
            <div className="left_card"  >
              <img className="food" src="food.jpeg"></img>
              <h3>Order Online</h3>
              <p>Stay home and order to your doorstep</p>
            </div>
            <div className="right_card">
              <img className="dining" src="dining.jpeg"></img>
              <h3>Dining Out</h3>
              <p>View the city's favourite dining venues</p>
            </div>
          </div> 

          <div className="banner">
          <h2>Collections</h2>
          <br></br>
            <div className="row1">
            <h5>Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends</h5>
                <h6>All Collections in Kochi <i id="caretright" class="fa fa-caret-right" aria-hidden="true"></i></h6>
            </div>

          <div className="banner-cards">
                <div className="banner-card-1">
                <img src="curry.jpeg"></img>
                  <h3>Veggie Friendly </h3>
                  <h5>5 Places <ArrowRightIcon/></h5>
              
                </div>
                <div className="banner-card-2">
                <img src="cookies.jpeg"></img>
                  <h3>Trending this weekk </h3>
                  <h5>30 Places <ArrowRightIcon/></h5>
                </div>
                <div className="banner-card-3">
                <img src="net.jpeg"></img>
                  <h3>Must visit restaurants in... </h3>
                  <h5>9 Places <ArrowRightIcon/></h5>
                </div>
                <div className="banner-card-4">
                  <img src="cofee.jpg"></img>
                  <h3>Great Cafes </h3>
                  <h5>12 Places <ArrowRightIcon/></h5>
                </div>
          </div>      


          <div className="location">
            <p>Popular localities in and around Kochi</p>
          </div> 
          <div className="loc-card">
              <div className="loc-row-1">
                      <p>Kakkanad </p>
                      <p>512 Places <ArrowRightIcon/></p>
                    </div>

              <div className="loc-row-2">
                      <p>Edapally </p>
                      <p>365 Places <ArrowRightIcon/></p>
                    </div>    

              
              <div className="loc-row-3">
                      <p>Fort Kochi </p>
                      <p>105 Places <ArrowRightIcon/></p>
                    </div>          
          </div>

          <div className="loc-card1">
              <div className="loc-row-4">
                      <p>Panampilly Nagar </p>
                      <p>99 Places <ArrowRightIcon/></p>
                    </div>

              <div className="loc-row-5">
                      <p>MG Road </p>
                      <p>103 Places <ArrowRightIcon/></p>
                    </div>    

              
              <div className="loc-row-6">
                      <p>Kacheripady </p>
                      <p>105 Places <ArrowRightIcon/></p>
                    </div>          
          </div>



          <div className="loc-card2">
              <div className="loc-row-7">
                      <p>Palarivattom </p>
                      <p>188 Places <ArrowRightIcon/></p>
                    </div>

              <div className="loc-row-8">
                      <p>Vytilla </p>
                      <p>143 Places <ArrowRightIcon/></p>
                    </div>    

              
              <div className="loc-row-9">
                      <p style={{alignItems:"center"}}>See More <ArrowDropDownIcon/></p>
                     
                    </div>          
          </div>
</div>   
</div>             

  )
}

export default Navbar