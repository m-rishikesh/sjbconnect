import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';  // Import EventCard Component
import axios from 'axios';

const Hackathon = () => {
  // const events = [
  //   {
  //     title: "Tech Fest 2025",
  //     venue: "ABC Auditorium, XYZ University",
  //     timing: "March 15, 2025 | 10:00 AM - 5:00 PM",
  //     fee: "₹500",
  //     lastDate: "March 10, 2025"
  //   },
  //   {
  //     title: "Code Fest 2025",
  //     venue: "XYZ College",
  //     timing: "April 20, 2025 | 9:00 AM - 3:00 PM",
  //     fee: "₹300",
  //     lastDate: "April 15, 2025"
  //   },
  //   {
  //     title: "AI Hackathon 2025",
  //     venue: "Tech Park, ABC City",
  //     timing: "May 5, 2025 | 11:00 AM - 6:00 PM",
  //     fee: "₹700",
  //     lastDate: "April 30, 2025"
  //   },
  //   {
  //     title: "Blockchain Summit 2025",
  //     venue: "DEF Institute",
  //     timing: "June 10, 2025 | 10:00 AM - 5:00 PM",
  //     fee: "₹600",
  //     lastDate: "June 5, 2025"
  //   },
  //   {
  //     title: "Cybersecurity Workshop 2025",
  //     venue: "GHI College",
  //     timing: "July 25, 2025 | 8:00 AM - 4:00 PM",
  //     fee: "₹400",
  //     lastDate: "July 20, 2025"
  //   }
  // ];

  const [events,setevents] = useState([]);
  const [iserrorwhilefetch,setiserrorwhilefetch] = useState(false);
  useEffect(()=>{
    const hackapi = 'http://127.0.0.1:8000/gethackdetails'
    axios.get(hackapi)
    .then((response)=>{
      setevents(response.data)
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
      {!iserrorwhilefetch && events.data && events.data.length > 0 ? (events.data).map((event, index) => (
        <EventCard
          key={index}
          newest={(index==0) ? true : false}
          title={event.title}
          venue={event.venue}
          timing={event.timing}
          fee={event.fee}
          lastDate={event.lastDate}
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
