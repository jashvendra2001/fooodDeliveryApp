import React, { useEffect, useState } from 'react';
import "./rescard.css";

const ResCart = () => {
  const [cardData, setCardData] = useState([]);
  const [dupliData, setDupliData] = useState([]);

  function handleRating() {
    const filterData = [...cardData];
    setDupliData(filterData.filter((item) => item.info.avgRating > 4));
  }

  function handleSorting() {
    const dataSorting = [...cardData];
    setDupliData(dataSorting.sort((a, b) => b.info.avgRating - a.info.avgRating));
  }

  const dataCall = async () => {
    try {
      const NewData = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.3852948&lng=77.04835539999999");
      const handleData = await NewData.json();
      setCardData(handleData.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
      setDupliData(handleData.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    dataCall();
  }, []);

  return (
    <div className="container">
      <button style={{ background: "pink" }} onClick={handleRating}>Rating</button>
      <button style={{ background: "pink" }} onClick={handleSorting}>Sorting Data</button>

      <div className="cardDataHandle">
        {
          dupliData.map((item) => {
            return (
              <div className="resCard" key={item.info.id}>
                <div className="img">
                  <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`} alt="" />
                </div>
                <h3>{item.info.name}</h3>
                <h4>Biryani, North Indian, Asian</h4>
                <h4>{item.info.avgRating}</h4>
                <h4>38 minutes</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ResCart;
