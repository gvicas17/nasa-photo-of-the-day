
import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";
import Description from './Components/Description'
import Header from './Components/Header'
import Picture from './Components/Picture'
import Title from './Components/Title'
import {listOfDates} from './Components/Dates'



function App() {

const [data, setData] = useState([])
const [dates, setDates] = useState(listOfDates[0])

const onChange = (e) => {

  setDates(e.target.value)
 }

 useEffect (() => {
   axios.get(`https://api.nasa.gov/planetary/apod?api_key=0GLWn0RH6sYoDCrpOBcAko6MLDn31fL0bjuQcHh6&date=${dates}`)
   .then(res => {
     const nasaData = (res.data)
     setData(nasaData)
   })
   .catch(err => {
     return (err, 'could not fetch data')
   })
 }, [dates])




  return (
    <div className="App">
    <Header onChange = {onChange}/>
    <Title photoTitle = {data.title}/>
    <Picture photo = {data.url}/>
    <Description photoDescription = {data.explanation}/>
    </div>
  );
}

export default App;
