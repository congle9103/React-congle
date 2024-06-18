import React from "react";
import {useCount} from "../stories/Count";

const Categories = () => {
  const {setCount} = useCount()
  return (
    <>
      <div>CategoriesPage</div>
      <button className="text-white bg-blue-800 rounded py-1 px-2 ml-1" onClick={()=>{
        setCount()
      }}>Mua ngay</button>
    </>
  )
  
};

export default Categories;
