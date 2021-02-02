import React from 'react';
import '../App.css';
import daphblanket from '../../assets/PhotoGallery/daphblanket.png';
import {Link } from 'react-router-dom';
import Disclaimer from '../../components/Disclaimer';
const CairnCare = () => {

      return (

       
<div className="About">

<div className="">


<div className="">
<div id="Title"> Hair Cutting</div>
<div className="headerImageContainer">
<img className="headerImage" src={daphblanket} />
</div>
<div id="AboutContent">
      


I have gone to a professional groomer and had their hair cut at home. 
            I have found that a hair cutting technique referred to as hand stripping allows the cairn to retain their wire hair-like texture and in doing so gives them a waterproof type layer of fur. 
<br />
    <br />
Every cairn is a bit different when it comes to getting a hair buzzed hair cut. 
            Hand stripping is preferred but not necessary. 
            I had my sire get a hair buzzer haircut when he was younger in age. 
            His hair was very soft afterward, but it is not as good at keeping him warm or waterproof. 
            I never got my sire’s hair cut by the hand stripper method. 
            His hair now, after well over a year has become more wiry in some spots, despite only ever cutting with the hair buzzers. 
            My dams are all hand stripped, but I had her get one hair buzz haircut when she was younger. It stunted her hair growth. 
<br />
    <br/>
    <Link to={{ pathname: "https://www.thehonestkitchen.com/blog/basics-of-hand-stripping/" }} target="_blank" > Click Here to see more info on hand stripping </Link>
{/* <a ref="https://www.thehonestkitchen.com/blog/basics-of-hand-stripping/">Click Here to see more info on hand stripping</a>             */}
<br />
<Link to={{ pathname: "https://www.cairnrescue.com/resources/stripping-diagram/" }} target="_blank" > Click Here to see a diagram for hand stripping </Link>
{/* <a ref="cairnrescue.com/resources/stripping-diagram/">Click Here to see a diagram for hand stripping</a> */}
            </div>

<div id="Title"> Nail Trimming </div>
<div id="AboutContent">

This is something I recommend for a groomer as well, but you will know you're getting closer to the time to get nails cut over time. 
            You can hear their nails tap on floors or anywhere in excessive amounts. 
            Cairns have black nails; you can't see the nail quick, so be extra careful. 
 <br />
 <br />
Letting your puppies' nails grow out too long can actually be more painful for them than cutting them too short. 
            Your groomer will have a good guideline for you to follow about how long and how often to get their nails cut.
 </div>
 <div id="Title"> Shedding </div>

 <div id="AboutContent">
Cairns shed the most when the seasons change as it goes from cold to warmer temperatures, because they don’t need as thick of a coat in the heat. 
            Brushing their coat during the seasons changing can significantly reduce shedding. 
            Brushing consistently can help a lot, and doing it once if not twice a week can help completely reduce shedding. 
            </div>



</div>
</div>
<br />
<br />
<Disclaimer />
</div>

      ); 
    
  }

  export default CairnCare;
  
