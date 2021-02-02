import React, { useState, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveReservation, listReservations, deleteReservation } from '../actions/reservationActions';

const ReservationsAdmin = (props) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientLocation, setClientLocation] = useState('');
  const [gender, setGender] = useState('');
  const [litter, setLitter] = useState('');
  const [litterETA, setLitterETA] = useState('');
  const [reserved, setReserved] = useState('');


  const reservationList = useSelector(state => state.reservationList);
  const { reservations, loading, error } = reservationList;

  // const puppyList = useSelector(state => state.puppyList);
  // const { loading, puppies, error } = puppyList;

  const reservationSave = useSelector(state => state.reservationSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = reservationSave;
  
  const reservationDelete = useSelector(state => state.reservationDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = reservationDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listReservations());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (reservation) => {
    setModalVisible(true);
    setId(reservation._id);
    setClientName(reservation.clientName);
    setClientLocation(reservation.clientLocation);
    setGender(reservation.gender);
    setLitter(reservation.litter);
    setLitterETA(reservation.litterETA);
    setReserved(reservation.reserved);

  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveReservation({
      _id: id,
      clientName, clientLocation, gender, litter, litterETA, reserved
    }));
  }
  const deleteHandler = (reservation) => {
    dispatch(deleteReservation(reservation._id));
  }
  return <div className="">
    <div className="PageContainer">
      <h1> Reservations - Admin</h1>
      <button className="button primary" onClick={() => openModal({})}>Create New Puppy Reservation </button>
 <div className="">
    {modalVisible && (
      <div className="">
        <form onSubmit={submitHandler} >
          <ul className="AdminContactForms">
            <li>
              <h2>Create New Puppy Reservation</h2>
            </li>
            <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </li>

            <li>
              <label htmlFor="clientName">
              Client Name - First Name, Last Initial
          </label>
              <input type="text" name="clientName" value={clientName} id="clientName" onChange={(e) => setClientName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="clientLocation">
              Client Location - State
          </label>
              <input type="text" name="clientLocation" value={clientLocation} id="clientLocation" onChange={(e) => setClientLocation(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="gender">
                Gender
          </label>
              <input type="text" name="gender" value={gender} id="gender" onChange={(e) => setGender(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="litter">
              litter
          </label>
              <input type="text" name="litter" value={litter} id="litter" onChange={(e) => setLitter(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="litterETA">
              litterETA
          </label>
              <input type="text" name="litterETA" value={litterETA} id="litterETA" onChange={(e) => setLitterETA(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="reserved">
              reserved
          </label>
              <input type="text" name="reserved" value={reserved} id="reserved" onChange={(e) => setReserved(e.target.value)}>
              </input>
            </li>
          
           
            <li>
              <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
            </li>
            <li>
              <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Back</button>
            </li>
          </ul>
        </form>
      </div>
    )}
</div>

    <div className="reservation-list">

      <table className="table">
        <thead>
          <tr>
            <th> ID </th>
            <th> Client Name </th>
            <th> Client Location </th>
            <th> Gender </th>
            <th> litter </th>
            <th> litter ETA </th>
            <th> reservationModel </th>
          </tr>
        </thead>
        <tbody>
 
          {reservations && reservations.map(reservation => (<tr key={reservation._id}>
      
            <td>{reservation._id}</td>
            <td>{reservation.clientName}</td>
            <td>{reservation.clientLocation}</td>
            <td>{reservation.gender}</td>
            <td>{reservation.litter}</td>
            <td>{reservation.litterETA}</td>
            <td>{reservation.reserved}</td>
            <td>
              <button className="button" onClick={() => openModal(reservation)} >Edit</button>
              {' '}
              <button className="button" onClick={() => deleteHandler(reservation)} >Delete</button>
            </td>
     
          </tr>))}
       
        </tbody>
      </table>
      </div>
    </div>
  </div>
}
export default ReservationsAdmin;