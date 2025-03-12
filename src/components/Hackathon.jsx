import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';  // Import EventCard Component
import axios from 'axios';
import { Link } from 'react-router-dom';

const Hackathon = () => {
//   const events = [
//   [
//     "raj@raj.coms,",
//     "webhack,",
//     "no,",
//     "no,",
//     "no,",
//     "no,",
//     "TRUE"
//   ],
//   [
//     "raj@raj.com",
//     "webhackasdf",
//     "tajhotel",
//     "123",
//     "200",
//     "321",
//     "TRUE"
//   ]
// ]

  const [events,setevents] = useState([]);
  const [iserrorwhilefetch,setiserrorwhilefetch] = useState(false);
  useEffect(()=>{
    const hackapi = `${import.meta.env.VITE_GET_NOTES}`;
    axios.get(hackapi)
    .then((response)=>{ 
      setevents(response.data);
      console.log(response.data);
      setiserrorwhilefetch(false);
    })
    .catch(err=>{
      console.log("error while fetching the data");
      setiserrorwhilefetch(true);

    })
  },[])
  return (
    <>
      <div className="upload-data">
      <Link to='/uploadhackathon'><button className='border-2 border-white p-3 font-bold hover:cursor-pointer hover:border-blue-600 hover:text-blue-600'>⬆️ Upload Hackathon</button></Link>
      </div>
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-4">
      
      {/* {console.log("event data: ",events.data)} */}
      {!iserrorwhilefetch && events && events.length > 0 ? events.map((event, index) => (
        <EventCard
          key={index}
          newest={(index==0) ? true : false}
          title={event[1]}
          venue={event[2]}
          timing={event[3]}
          fee={event[4]}
          lastDate={event[5]}
        />
      )):iserrorwhilefetch ? (
        <p>Error While Fetching the Content.</p>
      ):
      (
        <p>Loading Content...</p>
      )
      }
    </div>
    </>
  );
};

export default Hackathon;
