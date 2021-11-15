import React, { useState } from "react";
import { useParams } from "react-router";
import mobileData from "../mobile-data";
import Zoom from "react-img-zoom";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions";
const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const productSelect = useParams();

  const proDetail = mobileData.filter(
    phone => String(phone.id) === productSelect.id
  );
  const product = proDetail[0];
  const dispatch = useDispatch();
  console.log(product);
  const handleCart = product => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };
  return (
    <div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 gx-5  d-flex justify-content-center py-2 mx-auto product product-detail">
            <Zoom img={product.img} zoomScale={2} width={500} height={600} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => {
                handleCart(product);
              }}
              className="btn btn-primary my-5 w-80"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
