import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup'
import axios from 'axios'
import PizzaForm from './PizzaForm'
import PizzaHome from './PizzaHome'
import PizzaNav from './PizzaNav'
import PizzaSchema from './PizzaSchema'
import './App.css'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  jalapenos: false,
  mushrooms: false,
  instructions: ''
}
const initialFormErrors = {
  name: '',
  size: ''
}

export default function App() {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const creatPizza = pizza => {
    axios
      .post('https://reqres.in/api/pizza', pizza)
      .then(response => {
        console.log(response.data)
      })
    setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup
      .reach(PizzaSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(error => {
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      })
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['prpperoni', 'olives', 'jalapenos', 'mushrooms'].filter(topping => formValues[topping])
    }
    creatPizza(pizza)
  }

  useEffect(() => {
    PizzaSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <Switch>
        <Route path='/pizza'>
          <PizzaNav />
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>
        <Route path='/'>
          <PizzaNav />
          <PizzaHome />
        </Route>
      </Switch>
    </>
  );
};

