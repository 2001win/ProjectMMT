import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import mobileData from "../mobile-data";
import { addItem, delItem } from "../redux/actions";
const Cart = () => {
  const state = useSelector(state => state.itemReducer);
  let initalValue = 0;
  if (state.length > 0) {
    let total = 0;
    state.forEach(item => {
      console.log(item);
      total = total + item.quantity * item.price;
    });
    initalValue = total;
  }

  const [totalPrice, setTotalPrice] = useState(initalValue);

  const totalPriceHandler = value => {
    setTotalPrice(total => total + value);
    console.log(totalPrice);
  };
  const dispatch = useDispatch();

  const getNumberProduct = id => {
    const product = state.filter(phone => {
      return phone.id === id;
    })[0];
    console.log(product.quantity);
    return product.quantity;
  };
  const increaseHandler = id => {
    const product = mobileData.filter(phone => phone.id === id)[0];
    dispatch(addItem(product));
    console.log(state);
  };
  const decreaseHandler = id => {
    const product = mobileData.filter(phone => phone.id === id)[0];
    dispatch(delItem(product));
    console.log(state);
  };
  const itemRow = item => {
    return (
      <Fragment>
        <div className="row mb-4" key={item.id}>
          <div className="col-md-5 col-lg-3 col-xl-3 ">
            <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
              <img className=" cart-img" src={item.img} alt={item.title} />
            </div>
          </div>
          <div className="col-md-7 col-lg-9 col-xl-9">
            <div>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{item.title}</h5>
                  <p className="mb-0">
                    <span>
                      <strong id="summary">${item.price}</strong>
                    </span>
                  </p>
                </div>
                <div>
                  <div className="def-number-input mb-0 w-100 d-flex align-items-start">
                    <button
                      className="cart-btn"
                      onClick={() => {
                        decreaseHandler(item.id);
                        totalPriceHandler(-item.price);
                      }}
                    >
                      <span className="fas fa-minus"></span>
                    </button>
                    <input
                      value={getNumberProduct(item.id)}
                      className="quantity"
                      min={0}
                      name="quantity"
                      defaultValue={1}
                      type="number"
                    />
                    <button
                      className="cart-btn"
                      onClick={() => {
                        increaseHandler(item.id);
                        totalPriceHandler(item.price);
                      }}
                    >
                      <span className="fas fa-plus"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-5">
                <div>
                  <a
                    href="#!"
                    type="button"
                    className="cart-link small text-uppercase mr-3"
                  >
                    <i className="fas fa-trash-alt mr-1" /> Remove item{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-4" />
      </Fragment>
    );
  };
  return (
    <section className="px-4">
      {/*Grid row*/}
      <div className="row">
        {/*Grid column*/}
        <div className="col-lg-8">
          {/* Card */}
          <div className="mb-3">
            <div className="pt-4 ">
              <h5 className="mb-4">
                Cart (<span>{state.length}</span> phones)
              </h5>
              {state.map(item => itemRow(item))}
              <p className="text-primary mb-0">
                <i className="fas fa-info-circle mr-1" /> Do not delay the
                purchase, adding items to your cart does not mean booking them.
              </p>
            </div>
          </div>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-4">
          {/* Card */}
          <div className="mb-3">
            <div className="pt-4">
              <h5 className="mb-3">The total amount of</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Temporary amount
                  <span>${totalPrice}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>The total amount of</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>${totalPrice * 1.5}</strong>
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-primary btn-block cart-check"
              >
                <Link to="/checkout">Checkout</Link>
              </button>
            </div>
          </div>
        </div>
        {/*Grid column*/}
      </div>
      {/* Grid row */}
    </section>
  );
};

export default Cart;
