import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from './components/MessageBox';

export default function CartPage(props) {
  // const productId = props.match.params.id;
  // const qty = props.location.search
  //   ? Number(props.location.search.split('=')[1])
  //   : 1;
  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId, qty));
  //   }
  // }, [dispatch, productId, qty]);
  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId));
  //   }
  // }, [dispatch, productId]);
  // const removeFromCartHandler = (id) => {
  //   // delete action
  //   dispatch(removeFromCart(id));
  // };

  // const checkoutHandler = () => {
  //   props.history.push('/signin?redirect=shipping');
  // };
  return (
    <div>
      <div className="AboutContainer">
      <div className="PageContainer">
      <h1>Order Menu</h1>
      <MessageBox>
            You have no Orders to review right.<br /> No puppies left for deposits, check out puppies tab for more info on how to make a reservation for a furture litter. <Link to="/puppies"> Puppies </Link>
            <br />
            Or <br />
    
            <i> Check out puppy Accessories        </i> <Link to="/products"> Puppy Accessories </Link>
          </MessageBox>
  



    {/* <div className="AboutContainer">
          
    <div className="PageContainer">
        <h1>Orders Menu</h1>
         {cartItems.length === 0 ? (
          <MessageBox>
            You have no Orders to review right now.<br /> Check out puppies to adopt:  <Link to="/PuppiesPage"> Puppies </Link>
            <br />
            Or <br />
           Check out puppy Accessories <Link to="/products"> Puppy Accessories </Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="">
             <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
           
          </ul>
          </div>
      </div>
   
      */}
  <li>
              <h2>
                Subtotal  : $
                {/* {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} */}
              </h2>
            </li>
       <li>
              <button
                type="button"
                // onClick={checkoutHandler}
                className="primary block"
                disabled="true"
                // disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
      
    </div>
    </div>
    </div>
  );
}
