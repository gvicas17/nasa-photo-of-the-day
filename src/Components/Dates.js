import React from 'react'


function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    return (today = yyyy + '-' + mm + '-' + dd)
  }
  
  const initialDate = getDate()
  
  export const listOfDates = [
  initialDate,
  '2020-10-1',
  '2020-10-2',
  '2020-10-3',
  '2020-10-4',
  '2020-10-5',
  '2020-10-6',
  '2020-10-7',
  '2020-10-8',
  '2020-10-9',
  '2020-10-10',
  '2020-10-11',
  '2020-10-12',
  '2020-10-13',
  '2020-10-14',
  '2020-10-15',
  '2020-10-16',
  '2020-10-17',
  '2020-10-18',
  '2020-10-19',
  '2020-10-20',
  '2020-10-21',
  '2020-10-22'
  ]