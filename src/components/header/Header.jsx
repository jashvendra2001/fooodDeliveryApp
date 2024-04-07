import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div className="header_Parents flex">
        <div className="logo  flex-auto w-32">
            <img src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1712212047~exp=1712212647~hmac=7aa18891cacb1f891eb0ca769a30762e4500731559cc7b19eedc2b6938e612ea" alt="logo" width="90px"  />
        </div>
        <div className="nav_Links  flex-auto w-64">
            <ul className=' flex '>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </div>
    </div>
  )
}

export default Header