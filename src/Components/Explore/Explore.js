import React from 'react'
import './Explore.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Explore() {
  return (
<div>    
    <div class="centerplease">
    Explore options near me
</div>
<br/>

<div class="content">
<div>
<input type="checkbox" id="question1" name="q"  class="questions"/>
<div class="plus"><ArrowDropDownIcon/></div>
<label for="question1" class="question" id="q1">
<h4>Popular cuisines near me</h4>
</label>
<div class="answers">
Bakery food near me. Beverages food near me. Biryani food near me. Burger food near me. Chinese food near me. Desserts food near me. Ice Cream food near me. Kebab food near me. Maharashtrian food near me. Momos food near me. Mughlai food near me. North Indian food near me. Pizza food near me. Rolls food near me. Sandwich food near me. Seafood food near me. Shake food near me. Sichuan food near me. South Indian food near me. Street food near me.</div>
</div>

<div>
<input type="checkbox" id="question2" name="q" class="questions"/>
<div class="plus"><i id="caretright10" class="fa fa-angle-down" aria-hidden="true"></i></div>
<label for="question2" class="question" id="q1">
<h4>Popular restaurant types near me</h4>
</label>
<div class="answers">
Bakeries near me. Bars near me. Beverage Shops near me. Bhojanalya near me. Cafés near me. Casual Dining near me. Clubs near me. Cocktail Bars near me. Confectioneries near me. Dessert Parlors near me. Dhabas near me. Fine Dining near me. Food Courts near me. Food Trucks near me. Irani Cafes near me. Kiosks near me. Lounges near me. Microbreweries near me. Paan Shop near me. Pubs near me. Quick Bites near me. Shacks near me. Sweet Shops near me.
</div>
</div>

<div>
<input type="checkbox" id="question3" name="q" class="questions"/>
<div class="plus"><i id="caretright10" class="fa fa-angle-down" aria-hidden="true"></i></div>
<label for="question3" class="question" id="q1">
<h4>Top Restaurant Chains </h4>
</label>
<div class="answers">
Bikanervala Burger King Domino's Dunkin' Donuts Haldiram's KFC KrispyKreme McDonald'sPizza HutWOW! Momo
</div>
</div>
<div>
<input type="checkbox" id="question4" name="q" class="questions"/>
<div class="plus"><i id="caretright10" class="fa fa-angle-down" aria-hidden="true"></i></div>
<label for="question4" class="question" id="q1">
<h4>Cities We Deliver To</h4>
</label>
<div class="answers">
Delhi NCR Kolkata Mumbai Bengaluru Pune Hyderabad Chennai Lucknow Kochi Jaipur Ahmedabad Chandigarh Goa Indore Nashik Ooty Shimla Ludhiana Guwahati Amritsar Kanpur Allahabad Aurangabad Bhopal See more
</div>
</div>
</div>
</div>
  )
}

export default Explore