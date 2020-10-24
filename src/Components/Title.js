import React from 'react'

export default function Title (props){
    const title = props.photoTitle
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}