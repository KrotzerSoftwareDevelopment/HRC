import React from 'react';
import '../App.css';
import Utah1 from '../../assets/appimages/utah1.png';
import BearWorking from '../../assets/appimages/bearworkingsoftware.png';
import Disclaimer from '../../components/Disclaimer';
import {Link } from 'react-router-dom';

const AboutHomeRaised = () => {
    
      return (
        <div className="About">
          <div className="">
          
<div className="">

      <div id="Title">About Home Raised Cairns</div>
      <img className="headerImage" src={Utah1} />
      <div id="AboutContent">
  

  Hello, my name is Dean Krotzer. I am a Full Stack Software Developer that lives with a few wonderful 
    Cairn Terriers.
    My home has no kennels! 
    All my dogs and puppies live with me and they are given attention daily.
    Not one puppy is born in a kennel, and they are not sold to just anyone.
          They make me and my kids laugh and smile every day.
    <br />
    <br />
    
   All my adult Cairns have ADA Service Dog registration and all have proven themselves to be exceptional service animals. 
          My Adult Cairns sleep in bed with me and my kids every night. 
          These Cairns are not just dogs to us, they are family members!
 
    </div>

<div id="Title">Why Home Raised Cairns?</div>
<img className="headerImage" src={BearWorking} />
<div id="AboutContent">

 When you buy a puppy from Home Raised Cairns, you’re not just buying a dog that was raised in a home. 
          You’re buying from someone that cares a lot, and shows it. 
          I strive to ensure a superior puppy buying experience, puppy temperament, and quality. 
          Buying from Home Raised Cairns is buying a Cairn of a higher standard. 
          I always use the best options for vaccines and never let cost affect a decision in providing the most optimal care regarding anything for any puppy from Home Raised Cairns. 
          I dedicate hours daily to giving my cairns the time and attention they deserve. 
  <br />
    <br />
          I have spent countless hours researching the best/worst foods, treats, training techniques, vaccinations, etc. 
          I do my best to take this knowledge and share what I have learned about this amazing breed, so you don’t have to do as much research yourself. 
          Hopefully, with my guidance, you can continue to have the happiest and healthiest puppy even after they leave my care.
          <br />
    <br /> 
 As I am writing this Web App, they are sleeping (I mean working tirelessly, of course) by my side after we just got done running and playing outside. 
      I have years of experience regarding Cairn health,  what to feed, and how to ensure the best possible chance at a long healthy life for each puppy. 
      Home Raised Cairns isn't just a hobby. Home Raised Cairns is something I take seriously, and take significant time for and pride in. 
    They are family right down to having my last name on their pedigree!

   </div>
 </div>
 <div id="Title"> A Little More About Cairn Terriers: The Breed</div>
 <div id="AboutContent">

I have not met a dog breed I did not like yet. 
I believe all breeds are amazing! 
    I chose Cairns specifically for my family because they are hypoallergenic, smaller in size, have less shedding, are great with kids, love to travel, are loyal, and not to forget: they are fine with both being a couch potato, or running like the wind by your side. 
I especially love how they retain their cuteness as they age into adults.
<br />
    <br />      
Cairn Terriers are great little dogs that are always ready for an adventure, big or small. 
They are ready to jump into a kayak, take a hike up a mountain, or go for a stroll through your local park. 
These little dogs are doers and need to be at your side whether it's snuggling up and watching a movie, working hard (sleeping at your feet while you do all the real work), or riding in the car keeping you company.
 <br />
    <br />
Cairns are very versatile dogs for many different lifestyles, they are great with children, and are great with other dogs/animals. 
Not only do they need attention: they crave it. 
Sure, Cairn terriers are cute and cuddly but these little dogs also used to be fierce hunters, going after foxes, badgers, otters, and other small rodents. 
They hail from areas in Scotland. 
“Cairn” means rock pile, which stems from what they used to hunt, live, and play on, at the Isle of Skye.  
<br />
<Link to={{ pathname: "https://www.akc.org/dog-breeds/cairn-terrier/" }} target="_blank" >See more by clicking here</Link>
{/* <a ref="https://www.akc.org/dog-breeds/cairn-terrier/">See more by clicking here</a> */}
    </div>

 <br />
<br />
< Disclaimer />
</div>  
</div>

      ); 
    
  }

  export default AboutHomeRaised;
  
