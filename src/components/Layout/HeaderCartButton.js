import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const ctxContext = useContext(CartContext);
  const numberOfItems = ctxContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
