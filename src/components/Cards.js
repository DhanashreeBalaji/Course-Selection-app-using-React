import React from 'react'
import Card from "./Card"
import { useState } from 'react';
//courses variable mein saare data hai, card has to be created with these data, use map function.
//The format inside courses is like --->in data variable there are 4 array as in key value pairs,
// which are array of objects and we have to get them seperately in a single array
const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    // The likedCourses array is defined here in Cards.js because the track of all courses is kept in Cards.js. In card.js at a time only one course is considered...

    function getCourses() {
      if(category === "All") {
          let allCourses = [];
          Object.values(courses).forEach(array => {
              array.forEach(courseData => {
                  allCourses.push(courseData);
              })
          })
          return allCourses;
      }
      else {
          
          return courses[category];      
      }

  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
 