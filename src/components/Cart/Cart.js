import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [submittingData, setSubmittingData] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartAddItemHandler = (item) => {
    cartCtx.addFromCart(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartAddItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const onCheckoutHandler = () => {
    setIsOrdering(true);
  };

  const cartAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>

      {hasItems && (
        <button className={classes.button} onClick={onCheckoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const onConfirmHandler = async (userData) => {
    setSubmittingData(true);
    await fetch(
      "https://food-app-40ef8-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          userData: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setSubmittingData(false);
    setIsSubmitted(true);
    cartCtx.clearCart();
  };

  const cartItemsModal = (
    <React.Fragment>
      <div>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      {isOrdering && (
        <Checkout onConfirm={onConfirmHandler} onCancel={props.onClose} />
      )}
      {!isOrdering && cartAction}
    </React.Fragment>
  );

  const didSubmitModal = (
    <React.Fragment>
      <h3 style={{ color: "green", textAlign: "center" }}>
        Order Received Successfully!
      </h3>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onHideCart={props.onClose}>
      {!submittingData && !isSubmitted && cartItemsModal}
      {submittingData && !isSubmitted && (
        <h4 style={{ color: "blue", textAlign: "center" }}>
          Sending your order request
        </h4>
      )}
      {!submittingData && isSubmitted && didSubmitModal}
    </Modal>
  );
};

export default Cart;
