import React, { useEffect } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { listReservations } from '../actions/reservationActions';

const ReservationsPage = (props) => {
    const reservations = [
        {_id: 1,  clientName: "Sally", clientLocation: "Minnesota",   gender: 'female', litter: "next litter",litterETA: "07/31/20" , reserved: "yes"},
    ]
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
    return(
<div className="PageContent"> Welcome to the current Reservations Board!
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
        {reservations.filter(reservations => reservations.reserved === "yes").map(reservations =>
//  <Link to={'/puppy/' + puppy._id}>
    <div id="PuppyHomeCard">
        {reservations._id}
       
        <div>{reservations.clientName} from {reservations.clientLocation} is number {reservations._id} in line and has reserved a {reservations.gender} for the {reservations.litter} scheduled to be born on or around {reservations.litterTime}.</div>
        
        </div>
        // </Link>
        )}


  



</div>


    )
        }





export default ReservationsPage;