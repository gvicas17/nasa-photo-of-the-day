import React from 'react'
import {listOfDates} from './Dates'

export default function Header (props){
    const onChange = props.onChange
    return(
        <nav>
        <label class = 'dates'>Change NASA Photo Date:</label>
            <select onChange = {onChange}>
              <option>--</option>
              <option
                value = {listOfDates[0]}
              >
                Today's Picture
                </option>
              <option 
                value = {listOfDates[1]}
                >
                October 1
                </option>
                <option 
                value = {listOfDates[2]}
                >
                October 2
                </option>
                <option 
                value = {listOfDates[3]}
                >
                October 3
                </option>
                <option 
                value = {listOfDates[4]}
                >
                October 4
                </option>
                <option 
                value = {listOfDates[5]}
                >
                October 5
                </option>
                <option 
                value = {listOfDates[6]}
                >
                October 6
                </option>
                <option 
                value = {listOfDates[7]}
                >
                October 7
                </option>
                <option 
                value = {listOfDates[8]}
                >
                October 8
                </option>
                <option 
                value = {listOfDates[9]}
                >
                October 9
                </option>
                <option 
                value = {listOfDates[10]}
                >
                October 10
                </option>
                <option 
                value = {listOfDates[11]}
                >
                October 11
                </option>
                <option 
                value = {listOfDates[12]}
                >
                October 12
                </option>
                <option 
                value = {listOfDates[13]}
                >
                October 13
                </option>
                <option 
                value = {listOfDates[14]}
                >
                October 14
                </option>
                <option 
                value = {listOfDates[15]}
                >
                October 15
                </option>
                <option 
                value = {listOfDates[16]}
                >
                October 16
                </option>
                <option 
                value = {listOfDates[17]}
                >
                October 17
                </option>
                <option 
                value = {listOfDates[18]}
                >
                October 18
                </option>
                <option 
                value = {listOfDates[19]}
                >
                October 19
                </option>
                <option 
                value = {listOfDates[20]}
                >
                October 20
                </option>
                <option 
                value = {listOfDates[21]}
                >
                October 21
                </option>
                <option 
                value = {listOfDates[12]}
                >
                October 22
                </option>
            </select>
    </nav>
    )
}