import React,{ useEffect } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsPuppy } from '../actions/puppyActions';
import {Nav, Col, Row, Tab, Carousel} from 'react-bootstrap';
import '../App.css';

const BirthCert = (props) => {

    const puppyDetails = useSelector(state => state.puppyDetails);
    const { puppy, loading, error } = puppyDetails;
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsPuppy(props.match.params.id));
      return () => {
          //
      }
  }, []);
  const handleAddtoDeposit = () => {
      props.history.push("/deposit/" + props.match.params.id)
  }

    return <div className="">
      
  <div className="PuppyPage">
     
       
       

    <div className="">
      
    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          
    <div className="details">
     <h1> {puppy.name} </h1>

    

    </div>
    )
    }
      <br />
        <br />
    </div>
    </div>
    </div>
}
export default BirthCert;