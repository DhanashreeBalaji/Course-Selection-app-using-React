import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setlikedCourses = props.likedCourses;
    function clickHandler(){
        // Now we have track of all the liked courses using the array came thru props...
        //logic to find if the current card is liked or not? And what to do then to unlike /like
       if(likedCourses.includes(course.id)){
        //pehle se ye card liked hai
        //when you click on top of a liked card then it gets disliked, so remove the courseid of that liked card on which you clicked from likedCourses array.
        setlikedCourses( (prev) => prev.filter((cid) => (cid !== course.id) ) );
        toast.warning("like removed");
       }
       else{
        // For a not liked button, when clicked over it, it should get liked and have to add it on likedCourses array.
        //LikedCourses array can be empty or have some courseid's in it already---->Two cases
        if(likedCourses.length === 0){
            setlikedCourses([course.id]);
        }
        else{
            setlikedCourses((prev) => [...prev,course.id]);
        }
       }

    }

  return (
    <div className='w-[300px] bg-bgDark  bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src = {course.image.url}></img>
        
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>

            <button onclick = {clickHandler}>
                 {
                    !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>) : (<FcLike fontSize="1.75rem"/>)
                                    }
            </button>
        </div>

        </div>

       
        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
          {
            course.description.length >100 ?
            (course.description.substr(0,100)) + "...":
            (course.description)
          }
            </p>
        </div>

    </div>
  )

  }
export default Card