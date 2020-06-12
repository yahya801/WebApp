import React, {useState, useEffect} from 'react';
import { set } from 'mongoose';

const Pagination = ({showPerPage, onPaginationChange, total}) => {
    console.log(showPerPage)
    const [counter, setCounter] = useState(1);

    useEffect(()=>{
        console.log("counter changes")
        const value = showPerPage * counter;
        console.log("Start value: ", value - showPerPage)
        console.log("End value: ", value)
        onPaginationChange(value - showPerPage, value)

    }, [counter]);

    const onButtonClick = (type) => {
        if (type === "prev"){
            if (counter === 1){
                setCounter(1)
            }
            else{
                setCounter(counter-1);
            }
        }
        else if(type==="next"){
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter)
            }
            else{
                setCounter(counter+1);
            }
            
        }
    }


// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

  return (
      <div>
          <br/>
          <div className = "container-fluid">
              <div className = "row">
                  <div className = "col">
                      <div className = "d-flex flex-wrap justify-content-between align-self-start">
                      <button 
                      className = "btn btn-primary"
                      onClick = {() => onButtonClick("prev")}
                      > Previous </button>
                      <button 
                      className = "btn btn-primary"
                      onClick = {() => onButtonClick("next")}
                      > Next </button>

                      </div>

                  </div>

              </div>

          </div>
          

      </div>
  );
        }


export default Pagination;