import React, { useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {toast} from "react-toastify";
import {useEffect} from "react";
import Spinner from "./components/Spinner";


const App = () => {
 const [courses, setCourse] = useState([]);
 const [loading , setLoading] = useState(true);
 const [category, setCategory] = useState(filterData[0].title);
 //We got the data to be displayed inside Cards as a whole ,pass this data to Cards component one by one
 
    //task written in a function
    //async function fetchData() {------}
    async function fetchData() {
      setLoading(true);
      try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      //save the json data got thru Api call into variable 'output'
        console.log(output);
        setCourse(output.data);
      }
      catch(error){
       toast.error("Something went wrong");
      }
      setLoading(false);
    }
    
 useEffect ( () => {
  fetchData();
 }, [])


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
  <div>
  <Navbar></Navbar>
  </div>

  <div>
  <Filter filterData = {filterData} category = {category} setCategory = {setCategory} ></Filter>
  </div>
     
     <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
     {
      loading ? (<Spinner/>) : (<Cards courses = {courses} category = {category}> </Cards>) 
     }
     </div>
      
    </div>
  );
};

export default App;
