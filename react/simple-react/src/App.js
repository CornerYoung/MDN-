import React from 'react'

export default function App(props) {
    console.log(props)
    return (
        <div>
            <h1>Hello world!</h1>
            <p>{props.title}</p>
        </div>
    )
}
