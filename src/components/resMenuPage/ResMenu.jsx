import React, { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
import "./resmenu.css";

const ResMenu = () => {
    const [dataMenu, setDataMenu] = useState([]);
    const { resId } = useParams(); // Extracting resId from URL params

    const dataMenuFetch = async () => {
        try {
            const menuData = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3852948&lng=77.04835539999999&restaurantId=${resId}`);
            const jsonData = await menuData.json();
            setDataMenu(jsonData?.data?.cards[2]?.card?.card);
        } catch (error) {
            console.error('Error fetching menu data:', error);
        }
    }

    useEffect(() => {
        dataMenuFetch();
    }, [resId]); // Trigger useEffect whenever resId changes

    return (<>
   {
   dataMenu.length===0?"data is loading": <div className='menu'>
        <h1>{dataMenu?.info?.name}</h1>
        <h2>{dataMenu?.info?.city}</h2>
        <p>{dataMenu?.info?.avgRating}</p>
    </div>
   } 
    
    </>
        
       
    );
}

export default ResMenu;
