import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  { id: "m1", name: "Pizza", price: 2, description: "Spicy and Cheesy" },
  {
    id: "m2",
    name: "Burger",
    price: 4,
    description: "Delicious ingredients",
  },
  {
    id: "m3",
    name: "Sandwich",
    price: 1.5,
    description: "love the way you bite",
  },
  { id: "m4", name: "vanilla", price: 5, description: "creamy dream" },
];

const AvailableMeals = () => {
  const mealItems = DUMMY_MEALS.map((meals) => (
    <MealItem
      key={meals.id}
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
