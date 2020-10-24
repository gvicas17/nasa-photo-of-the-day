import React from 'react'

export default function Description (props){
    const description = props.photoDescription 
    return(
        <div className = 'description'>
        <h3>{description}</h3>
        </div>
    )
}