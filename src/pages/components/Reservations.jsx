import React, { useEffect } from 'react';
import '../App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { listReservations } from '../actions/reservationActions';

const Reservations = (props) => {
    const reservations =[{
        _id: '1',
        clientName: 'Sally K.',
        clientLocation: 'Minnesota',
        gender: 'female',
        litter: 'next litter',
        litterETA: '12/10/20',
        reserved: 'yes'
    }]
//     {
//         _id: '2',
//         clientName: 'Kathy C.',
//         clientLocation: 'California',
//         gender: 'female',
//         litter: 'next litter',
//         litterETA: '12/10/20',
//         reserved: 'yes'
//     },{
//         _id: '3',
//         clientName: 'Shanon B.',
//         clientLocation: 'Washington',
//         gender: 'male or female',
//         litter: 'next litter',
//         litterETA: '12/10/20',
//         reserved: 'yes'
//     }
// ]
    // const reservationList = useSelector(state => state.reservationList);
    // const { reservations, loading, error } = reservationList;
   
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(listReservations());
    //     return () => {
    //     };
    // }, [])

    // return loading? <div>loading...</div>:
    // error? <div>{error}</div>:

return (
<div className="PageContent"> 

Sorry, Home Raised Cairns has no puppies available right now. The Next Litter is Due on this mid to late summer 2021. In am currently accepting reservations for the upcoming litter, puppies born will be listed here. 
    To reserve a puppy not yet born, you need to have a phone interview, and a $500 non-refundable deposit needs to be received. 
    <br />
    <br />
    Once when a deposit has been received, Home Raised Cairns will put your name and choice of gender on a reservations list for the upcoming litter.
   <br /> 
   <br />
    The first one on the list gets the first choice and the second one on the list gets the second choice and so on.
    Reservations list will appear below and since this is a web app it updates in real time, but names will be only added after confirmation of received deposit.
            <br />
        
        <br />
      
    {reservations.map(reservation => {
        return <div className="reservation">
             {reservation.resevered !== "yes" ? 
             <div>{reservation.clientName} from {reservation.clientLocation} is number {reservation._id} in line and has reserved a {reservation.gender} for the {reservation.litter} scheduled to be born on or around {reservation.litterTime}.</div>
            :
            <div className="">  </div>
        } 
        
         
         <br />
         <br />
       
        </div>
    })}

  



</div>
)

}



export default Reservations;