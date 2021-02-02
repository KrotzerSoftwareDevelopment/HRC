import React from 'react';
import '../App.css';
import Diet from '../../assets/appimages/OpenFarm.png';
import {Link } from 'react-router-dom';
import Disclaimer from '../../components/Disclaimer';
const AboutDiet = () =>{
      return (
<div className="">
<div className="">
        
<div className="About">
  <div id="Title">Diet</div>
  <img className="headerImage" src={Diet} />
  <div id="AboutContent">

   Diet is just as important for dogs as it is for us and our overall health! I feed them as naturally and healthily as possible: nothing but premium food such as Open farm and fresh organic foods that I cook and bake for them. 
            Before and during pregnancies, I feed the soon-to-be mom an organic blend of prenatal vitamins to help ensure the best possible chance of a healthy pregnancy and delivery. 
    <br />
    <br />
            
    Open Farm provides human-grade quality food, employs small farms, and produces a very healthy dog food! 
            I feed open farm food to all my adult dogs and puppies. 
            My favorite part of Open Farm is that every item on their ingredients list are able to be traced back to its source through their website. 
            With Open Farm, you know exactly what's in our furry friend's food and exactly where it came from. 
<br />
            {/* <a ref="https://www.openfarmpet.com/">Click Here to check them out</a> */}
            <Link to={{ pathname: "https://www.openfarmpet.com/" }} target="_blank" >Click Here to check them out</Link>
<br />            
(I’m not sponsored by anyone here, I just care deeply about making sure the animals have the best care)
    
  
    </div>
    
    <div className="">

    <div id="Title">What Not To Feed</div>
    <div id="AboutContent">
   
A general rule of thumb for me personally is that I won’t buy food from Walmart, not because the store is inherently bad, but because I have found very little evidence of the food I’ve seen sold there meeting my high expectations.
 <br />
 <br />
You’d be surprised at how many brands of dog food are actually doing more harm than good when it comes to the quality of their food. 
The only food I would ever come close to recommending from Walmart is a fresh pet select. 
You should honestly be pretty safe with any of the fresh pet select food options. 
Open Farm food is the best I’ve seen, though. 
      <br />
 <br />
     Most human food is bad to feed your furry family member and one of the biggest reasons is sodium. 
     Most human foods contain a significant amount of it, and consuming that can lead to heart failure and other serious health issues and significantly shorten a dog's life span.
<br /> 
      {/* <a ref="https://www.akc.org/expert-advice/nutrition/human-foods-dogs-can-and-cant-eat/">Click here to see what the AKC has to say about giving human food to dogs</a> */}
      <Link to={{ pathname: "https://www.akc.org/expert-advice/nutrition/human-foods-dogs-can-and-cant-eat/" }} target="_blank" >Click here to see what the AKC has to say about giving human food to dogs</Link>
      <br />
           <br />
Every puppy comes with an informational guide on what human foods are good to feed your new family member and what foods are not! 
      Even some kinds of fruits and vegetables can be bad for your dog. 
      The guide from the AKC that you’ll receive will explain more about this, but you can also check out more on this from their website 
      {/* <a ref="https://www.akc.org/expert-advice/nutrition/fruits-vegetables-dogs-can-and-cant-eat/">by clicking here.</a> */}
      <Link to={{ pathname: "https://www.akc.org/expert-advice/nutrition/fruits-vegetables-dogs-can-and-cant-eat/" }} target="_blank" > Learn more. </Link>
    <br />
            <br />
The only other food-type item I recommend is called no hide from Earth Animals. 
Hide is important for the Cairns to chew on to keep their teeth clean. 
No hide is a rawhide alternative that won't wreak havoc on your furry friend's digestive track as normal rawhides will. 
No hide is a great healthy chewing treat that I make sure I always have around, It is one of the only things I can buy that they can't chew up in 20 minutes, and it's made with healthy ingredients!
      <br />
      <Link to={{ pathname: "https://www.earthanimal.com/our-products/no-hide-wholesome-chews?utm_source=google%20ppc&utm_medium=search&utm_campaign=treats&utm_term=no%20hide%20chews&gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSa5UB-kY9IBTRKNAEL2m6NwK7O2gqGp6dG7aEUhXtBRbC1-sH-zVrcaAg2LEALw_wcB" }} target="_blank" > Learn more here. </Link>
{/* <Link to= "https://www.earthanimal.com/our-products/no-hide-wholesome-chews?utm_source=google%20ppc&utm_medium=search&utm_campaign=treats&utm_term=no%20hide%20chews&gclid=Cj0KCQiAlsv_BRDtARIsAHMGVSa5UB-kY9IBTRKNAEL2m6NwK7O2gqGp6dG7aEUhXtBRbC1-sH-zVrcaAg2LEALw_wcB">Check it out by clicking here</Link>     */}
      </div>

    </div>
    <br />
<br />
<Disclaimer />
    </div>

    </div>

</div>


      ); 
    
  }

  export default AboutDiet;
  
