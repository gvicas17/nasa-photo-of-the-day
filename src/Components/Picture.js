import React from 'react'

export default function Picture (props){
    const picture = props.photo
    return(
        <div>
            <img src = {picture} alt = 'NASA APOD'/> 
        </div>
    )
}