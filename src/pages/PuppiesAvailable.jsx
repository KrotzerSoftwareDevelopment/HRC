import React from 'react';
import {Link} from 'react-router-dom';
const PuppiesAvailable = () =>{
   const puppies = [
        {_id: 1, name: "Emma", gender: "Female", rank: "Available", icon: "",dob: "05/10/20" },
        {_id: 2, name: "Leo", gender: "Male", rank: "Adopted", dob: "05/10/20", },
        {_id: 3, name: "Milo", gender: "Male", rank: "Adopted", dob: "05/10/20", },
]
return (
<div className="">
   No puppies are Available right now, the next litter will be late summer of 2021.
   To learn more please go to the Current Reservations tab.

{/*    
        {puppies.filter(puppies => puppies >= 0).map(puppy => puppy ?
              <div>  
            {puppies.filter(puppies => puppies.rank === "Available").map(puppy =>
               <div>
            <Link to={'/puppy/' + puppy._id}>
               <div id="PuppyHomeCard">
                   {puppy.id}
                  
                   {puppy.name}
                   
                   </div>
                   </Link>
                
           </div> 
               )}
               </div>
        :
        <div>
           None
        </div>
        )
      } */}
 

<div>
   </div>
  
</div>

)
}
export default PuppiesAvailable;