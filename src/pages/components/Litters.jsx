import React from 'react';
import {Link} from 'react-router-dom';
const Litters = () =>{
        const AllLitters = [
            {_id: 1, name: "Origin", puppyCount: 3, season: 'Spring', year: 2020, Image: ''},
            {_id: 2, name: "Everest", puppyCount: '', season: '', year: 2020, Image: '' },
        ]
    return (
    <div>
        <h1> Litters </h1>
        {AllLitters.map(litters =>
  <Link to='/PuppiesAvailable' > 
            <div id="PuppyHomeCard">
            {litters.id}
           
            {litters.name}

            {litters.year}
            </div>
            </Link>
            )}
    
        
    </div>
    )
    }
    export default Litters;