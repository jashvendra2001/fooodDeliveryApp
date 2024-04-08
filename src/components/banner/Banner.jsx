import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
   <div id="main">
    <div id="nav">
    <div id="nav-part1">
        
        <img src="data:image/png;base64,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" alt="" />
    <h4>home1</h4>
    <h4>home1</h4>
    <h4>home1</h4>
    <h4>home1</h4>
    <h4>home1</h4>
    
    </div>
    <div id="nav-part2">
    <i class="ri-search-line"></i>
    <i class="ri-shopping-cart-line"></i>
    <i class="ri-menu-4-fill"></i>
    </div>
   </div>


   <div className="content">

    <div id="left">
        <h5>Explore the limited edition</h5>
        <h1>Nike Limited Edition</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta commodi natus quas labore amet quos officiis deleniti alias odio laudantium esse exercitationem recusandae, nulla at praesentium repellat .</p>
        <button>shop now</button>
    </div>
    <div id="right">
        <div class="elem">
            <img src="https://images.vegnonveg.com/resized/1400X1146/521/nike-lebron-soldier-xii-sfg-blackwhite-5c122ccbbcb86.jpeg" alt="" />
            <h4>Levron Solider 12(team)</h4>
            <h5>Mens Basketball </h5>

        </div>
        <div class="elem">
            <img src="https://images.vegnonveg.com/resized/1400X1146/521/nike-lebron-soldier-xii-sfg-blackwhite-5c122ccbbcb86.jpeg" alt="" />
            <h4>Levron Solider 12(team)</h4>
            <h5>Mens Basketball </h5>

        </div>
        <div class="elem">
            <img src="https://images.vegnonveg.com/resized/1400X1146/521/nike-lebron-soldier-xii-sfg-blackwhite-5c122ccbbcb86.jpeg" alt="" />
            <h4>Levron Solider 12(team)</h4>
            <h5>Mens Basketball </h5>

        </div>
        <div class="elem">
            <img src="https://images.vegnonveg.com/resized/1400X1146/521/nike-lebron-soldier-xii-sfg-blackwhite-5c122ccbbcb86.jpeg" alt="" />
            <h4>Levron Solider 12(team)</h4>
            <h5>Mens Basketball </h5>

        </div>
        <div class="elem">
            <img src="https://images.vegnonveg.com/resized/1400X1146/521/nike-lebron-soldier-xii-sfg-blackwhite-5c122ccbbcb86.jpeg" alt="" />
            <h4>Levron Solider 12(team)</h4>
            <h5>Mens Basketball </h5>

        </div>
        <div class="elem">
            <img src="https://images.vegnonveg.com/resized/1400X1146/521/nike-lebron-soldier-xii-sfg-blackwhite-5c122ccbbcb86.jpeg" alt="" />
            <h4>Levron Solider 12(team)</h4>
            <h5>Mens Basketball </h5>

        </div>
    </div>
   </div>
    </div>
  
  )
}

export default Banner