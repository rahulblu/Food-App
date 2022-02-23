import { useRef, useState } from "react";
// import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmout = amountInputRef.current.value;
    const enteredAmoutNumber = +enteredAmout;

    if (
      enteredAmoutNumber.trim().length === 0 ||
      enteredAmoutNumber < 1 ||
      enteredAmoutNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmoutNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          max: "5",
          min: "1",
          step: "1",
          type: "number",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please add items to the cart!</p>}
    </form>
  );
};

export default MealItemForm;
