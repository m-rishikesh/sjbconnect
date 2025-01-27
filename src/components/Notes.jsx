import { Link } from 'react-router-dom';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { useState } from 'react';
export default function Notes(){
    const depts = ['CSE','ISE','ECE','CS-DS'];
    const years = ['1st Year','2nd Year','3rd Year','4th Year']
    const [yearbool,setyearbool] = useState(false);
    return(
        <>
        <div className="maincontainer py-19 relative">
        {yearbool && (
          <span onClick={() =>setyearbool(false)} className="text-left border-2 border-white absolute top-10 left-0 px-2 py-2 cursor-pointer">
            Back
          </span>
        )}
        {(!yearbool)?depts.map((dept)=>(
            <Link to="#">
            <div className="container flex  w-full font-mono hover:text-amber-300  key={dept} my-10 "onClick={()=>{setyearbool(true)}}>
            {/* cards section */}
            <div className="elements py-3 border-2 border-white w-full text-left px-2 cursor-pointer hover:border-amber-300">
             <FolderOpenIcon className=''/>
             <span className='px-3 text-xl'>{dept}</span>
            </div>
         </div>
             </Link>
        ))
        :
        years.map((year)=>(
            <Link to="#">
            <div className="container flex  w-full font-mono hover:text-amber-300  key={dept} my-10 "onClick={()=>{setyearbool(true)}}>
            {/* cards section */}
            <div className="elements py-3 border-2 border-white w-full text-left px-2 cursor-pointer hover:border-amber-300">
             <FolderOpenIcon className=''/>
             <span className='px-3 text-xl'>{year}</span>
            </div>
         </div>
             </Link>
        ))
    }
        </div>
        </>
    )
}