import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorPresent, setIsErrorPresent] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      // Toggle spinner
      setIsLoading(true);

      // const response = await fetch('https://react-http-test-d8033-default-rtdb.asia-southeast1.firebasedatabase.app/meals.ERROR');
      const response = await fetch('https://react-http-test-d8033-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');

      // Error checking
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          // name: data[key].name,
          // description: data[key].description,
          // price: data[key].price,
          ...data[key]
        });
      }

      // Toggle spinner
      setIsLoading(false);

      setMeals(loadedMeals);
    };

    // Using catch directly on fetchMeals() function because it's a promise
    fetchMeals().catch(error => {
      // Error handling
      setIsLoading(false);
      setIsErrorPresent(error.message);

    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading meals...</p>
      </section>
    );
  }

  if (isErrorPresent) {
    return (
      <section className={classes.mealsError}>
        <p>🚨 ERROR!</p>
        <p>{isErrorPresent}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
