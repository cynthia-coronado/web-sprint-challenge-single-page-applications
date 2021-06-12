import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'

export default function PizzaHome() {
    const { url } = useRouteMatch()

    return (
        <div className='mainContainer'>
            <h1>HTTPizza Pie!</h1>
            <h1>We have the data you need to create an amazing pizza!</h1>
            <Link to={`${url}pizza`}><button id='redirect'>To the data!</button></Link>
        </div>
    )
}