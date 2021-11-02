import React from 'react'
import './Stars.css'
import { Star } from 'react-feather'

export default () => (
  <div>
  
    
    <section className="Contact--Section1">
        <div className="container Contact--Section1--Container">
            <div className="Contact--Details" >
            <p className="recen" >Kundrecension - flyttstädning</p>
            <p className="namez">Alexandra</p>
            <div id="starcontainer" >
            <Star  className="feather"  /> <Star  className="feather"  /> <Star  className="feather"  /> <Star className="feather"  /> <Star className="feather"  />
            </div>
            <p className="comment">Ett trevligt bemötande, och noggrann städning! Rekommenderas starkt!</p>
            </div>
            <div className="Contact--Details" >
            <p className="recen" >Kundrecension - flyttstädning</p>
            <p className="namez">Mikael</p>
            <div id="starcontainer" >
            <Star  className="feather"  /> <Star  className="feather"  /> <Star  className="feather"  /> <Star className="feather"  /> <Star className="feather"  />
            </div>
            <p className="comment">Mycket nöjd med min flyttstädning! Städningen gick snabbt men var ändå noggrann. Priset var också helt Ok.</p>
            </div>
            <div className="Contact--Details" >
            <p className="recen" >Kundrecension - flyttstädning</p>
            <p className="namez">Samir</p>
            <div id="starcontainer" >
            <Star  className="feather"  /> <Star  className="feather"  /> <Star  className="feather"  /> <Star className="feather"  /> <Star className="feather"  />
            </div>
            <p className="comment">Duktiga och trevliga.</p>
            </div>
       

        </div>
        </section>
      
   
  </div>
)
