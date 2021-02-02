import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import { Nav, Col, Row, Tab } from 'react-bootstrap';
import ReactPlayer from "react-player"
const PuppiesSold = () =>{
    const puppies = [
        {_id: 1, name: "Emma", gender: "Female",price: "2900", rank: "Adopted", icon: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Emma/emma.png?raw=true',  slideimage1: 'https://youtu.be/325Y5Y-SqcQ',
        slideimage2: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Emma/emma2.png?raw=true',
        slideimage3: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Emma/emma3.png?raw=true',
        slideimage4: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Emma/emma4.png?raw=true',dob: "05/10/20" },
    
        {_id: 2, name: "Leo", gender: "Male", price: "2400", rank: "Adopted",  icon: ' ',  slideimage1: 'https://youtu.be/8MaKG9iTcp8',
        slideimage2: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Leo/leo1.png?raw=true',
        slideimage3: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Leo/leo2.png?raw=true',
        slideimage4: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Leo/leo3.png?raw=true', dob: "05/10/20", },
        {_id: 3, name: "Milo", gender: "Male", price: "2400", rank: "Adopted", icon: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Milo/milo.png?raw=true',         slideimage1: 'https://youtu.be/07wY9TVMUKA',
        slideimage3: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Milo/milo2.png?raw=true',
        slideimage2: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Milo/milo3.png?raw=true',
        slideimage4: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Milo/milo4.png?raw=true', dob: "05/10/20", },
    ]
return (
<div >


<div>
        {puppies.filter(puppies => puppies.rank === 'Adopted' ).map(puppy => 
            <div >
<div id="PuppyHomeCard" > 
          
          <Row>
                      <Col>
                     
            
      
    
    
   
    <br />
                     
                   <div id="">
                       
                       <div id="Title" >{puppy.name}</div>
                   </div>
                   <div >

               
                  
                   {/* <div class="video-container">
  <iframe url={puppy.slideimage1} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> */}
                   {/* <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 ,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={puppy.slideimage1}
        frameBorder="0"
      />
    </div> */}
                   <ReactPlayer
                      className="vidplayerContainer"
                      url={puppy.slideimage1}
                    />
               
                    </div>
                    <div id=""> Gender: {puppy.gender}</div>
                    <div id=""> ${puppy.price}</div>
                    </Col>
                    <Col>
                    
                    </Col>
                    </Row>
               
            </div>
     
        </div>
        )
}
 </div>
        {/* <h1> Puppies </h1>
    {puppies.map(puppy =>
//  <Link to={'/puppy/' + puppy._id}>
    <div id="PuppyHomeCard">
        {puppy.id}
       
        {puppy.name}
        <div id="puppyIcon">
        <img
         id=""
          src={puppy.icon}
          alt="Third slide"
          className="icon"
        />
        </div>
        
        
        </div>
        // </Link>
        )} */}

</div>

)
}
export default PuppiesSold;