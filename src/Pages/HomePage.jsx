import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from '../components/Home';


const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
      const asyncFunction = async  () => {
        try{
            const response = await axios("https://sanjana-student-data.s3.eu-north-1.amazonaws.com/students.json")
            setData(response.data.students)
            console.log(response.data.students)
        }
        catch(err){
            console.log(err)
        }
      
      }
      asyncFunction()
      
    }, [])
  return (
    <div>
      <Home students={data}></Home>
    </div>
  )
}

export default HomePage