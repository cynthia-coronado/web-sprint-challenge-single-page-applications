import React from 'react'

export default function PizzaForm(props) {
    const {
        values,
        submit,
        change,
        errors,
        disabled
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    const onChange = event => {
        const {
            name,
            value,
            type,
            checked
        } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    return (
        <div className='pizzaFormDiv'>
            <h1>Create Your Own Slice of Code!</h1>
            <img src='https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg'></img>
            <form onSubmit={onSubmit}>
                <div className='errors'>
                    <p>{errors.name}</p>
                    <p>{errors.size}</p>
                </div>
                <lable>
                    <h3>Name for Request</h3>
                    <input
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                    />
                </lable>
                <lable>
                    <h3>HTTPizza Pie Size</h3>
                    <select
                        onChange={onChange}
                        value={values.size}
                        name='size'>
                        <option value=''>--Pie Size--</option>
                        <option value='personal'>Personal</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='Extra Large'>Extra Large</option>
                    </select>
                </lable>
                <lable>
                    <h3>Pie Toppings</h3>
                    <h4>Pick up to 4</h4>
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                        />
                    </label>
                    <label>Olives
                        <input
                            type='checkbox'
                            name='olives'
                            onChange={onChange}
                        />
                    </label>
                    <label>Jalapenos
                        <input
                            type='checkbox'
                            name='jalapenos'
                            onChange={onChange}
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            onChange={onChange}
                        />
                    </label>
                </lable>
                <lable>
                    <h3>Special Instructions</h3>
                    <input
                        type='textarea'
                        name='instructions'
                        onChange={onChange}
                        value={values.instructions}
                    />
                </lable>
                <br></br>
                <button id='submit' disabled={disabled}>Request Pizza!</button>
            </form>
        </div>
    )
}