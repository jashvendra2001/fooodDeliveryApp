import React from 'react'
import ResCart from '../resCart/ResCart'
import HandleRating from '../HandleRating'

const Body = () => {
 
  
  return (
   <div className="body">
    <div className="search">
    {/* <HandleRating /> */}

    </div>
    <div className="res_container">
      <ResCart/>

    </div>
   </div>
  )
}

export default Body