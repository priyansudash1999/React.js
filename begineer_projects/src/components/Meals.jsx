import React, { useEffect, useState } from 'react'
import axios from "axios"

const Meals = () => {

  const [meals, setMeals] = useState([])

  useEffect(()=> {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
          .then(res => {
            console.log(res.data.meals);
            setMeals(res.data.meals)
          })  
          .catch((err) => console.error(err))
  }, [])

  const mealsList = meals.map(({strMeal, strMealThumb, idMeal}) => {
    return ( 
      <section className='rounded-xl shadow-md p-4 w-64' key={idMeal}>
        <img src = {strMealThumb} alt={strMeal} />
        <div className='flex gap-4'>
          <p className='mr-12'>{strMeal}</p>
          <p>{idMeal}</p>
        </div>
      </section>
    )
  })

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Indian Meals</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {mealsList}
      </div>
    </div>
  )
}

export default Meals