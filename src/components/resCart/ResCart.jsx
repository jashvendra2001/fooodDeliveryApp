import React, { useEffect, useState } from 'react';
import "./rescard.css";
import { Link } from 'react-router-dom';


const ResCart = () => {
  const [cardData, setCardData] = useState([]);
  const [dupliData, setDupliData] = useState([]);
  const[searchItem,setSearchItem]=useState("");

 
console.log(searchItem)
  function handleRating() {

   
    const filterData = [...cardData];
    setDupliData(filterData.filter((item) => item.info.avgRating > 4));
  }

  function handleSorting() {
    const dataSorting = [...cardData];
    setDupliData(dataSorting.sort((a, b) => b.info.avgRating - a.info.avgRating));
  }

  function handleSearch() {

    
   
   
      const filteredData = cardData.filter(item =>
        item.info.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      setDupliData(filteredData);

    setSearchItem("")

   
  }
  

 

  const dataCall = async () => {
    try {
      const NewData = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.3852948&lng=77.04835539999999");
      const handleData = await NewData.json();
      setCardData(handleData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setDupliData(handleData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      console.log(handleData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  

  useEffect(() => {
    
    
    dataCall();
    

  }, []);

 
  
 
  return (
    <div className="container">
      {console.log("inner call return function1")}
      <button style={{ background: "pink" }} onClick={handleRating}>Rating</button> &nbsp;
      <button style={{ background: "pink" }} onClick={handleSorting}>Sorting Data</button> &nbsp;
      <input type="text"  style={{border:"1px solid black"}}  value={searchItem} onChange={((e)=>{setSearchItem(e.target.value)
      
      })}/> 
      <button onClick={handleSearch}>Search</button> 

      <div className="cardDataHandle">
        {
          dupliData.length === 0 ? "data is fetching..." : dupliData.map((item) => {
            console.log(item.info.cuisines.map((items) => items))
            return (

              <Link to={`res/${item.info.id}`}  key={item.info.id}>
                <div className="resCard"  >
                <div className="img">
                  <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} alt="" />
                </div>
                <h3>{item.info.name}</h3>
                <h4>{item.info.cuisines.map((items) => items).join(", ")}</h4> {/* Display cuisines joined by comma */}
                <h4>{item.info.avgRating}</h4>
                <h4>{item.info.sla.deliveryTime}"minutes"</h4>
              </div>
              </Link>
             
            )
          })
        }
      </div>
    </div>
  );
}

export default ResCart;
