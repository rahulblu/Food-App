import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  { id: "m1", name: "Pizza", price: 3.99, description: "Spicy and Cheesy" },
  {
    id: "m2",
    name: "Burger",
    price: 1.99,
    description: "I'm lovin' it",
  },
  {
    id: "m3",
    name: "Sandwich",
    price: 1.49,
    description: "love the way you bite",
  },
  { id: "m4", name: "Choco Lava", price: 1.19, description: "creamy dreamy" },
];

const AvailableMeals = () => {
  const mealItems = DUMMY_MEALS.map((meals) => (
    <MealItem
      key={meals.id}
      id={meals.id}
      name={meals.name}
      price={meals.price}
      description={meals.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
