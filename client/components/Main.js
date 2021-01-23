import React, { cloneElement } from 'react'
import { Link } from 'react-router'
const Main = (props)=>{
    return(
        <div>
            <h1>
                <Link to="/">Reduxstagram</Link>
            </h1>
            {/* 
                We would use cloneElement when a parent component wants to add or modify the prop(s) of its children.
            */}
            {cloneElement(props.children, props)}
        </div>
    )
}
export default Main