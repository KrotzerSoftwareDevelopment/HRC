import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import './App.css';
import ReactPlayer from "react-player"
// import { useSelector, useDispatch } from 'react-redux';
// import { listPuppies } from '../actions/puppyActions';
import { Nav, Col, Row, Tab } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
const PuppiesPending = () =>{
    const puppies = [
        {_id: 1, name: "Ziggy", gender: "Male",price: "2400", rank: "Pending", icon: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Emma/emma.png?raw=true',  slideimage1: 'https://youtu.be/qjEW3WcWp4Y',
dob: "05/10/20" },
    
        {_id: 2, name: "Rimington", gender: "Male", price: "2400", rank: "Pending",  icon: 'https://github.com/KrotzerSoftwareDevelopment/homeraised/blob/main/src/assets/Puppies/Origin%20Litter/Leo/leo.png?raw=true',  slideimage1: 'https://youtu.be/WA_eLdCXFzY',
 dob: "05/10/20", },
    ]
    // const puppyList = useSelector(state => state.puppyList);
    // const { puppies, loading, error } = puppyList;

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(listPuppies());
    //     return () => {
    //     };
    // }, [])
    // return loading? <div><Spinner animation="border" variant="success" />loading...</div>:
    // error? <div>{error}</div>:
    return (
        <div >


        <div id="puppyCard">
                {puppies.filter(puppies => puppies.rank === 'Pending' ).map(puppy => 
                    <div >
        <div id="PuppyHomeCard" > 
                  
                  <Row>
                              <Col>
                             
                    
              
            
            
           
            <br />
                             
                           <div id="">
                               
                               <div id="Title" >{puppy.name}</div>
                           </div>
                           <ReactPlayer
                              
                              url={puppy.slideimage1}
                            />
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
export default PuppiesPending;