import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Noteslist from '../db/notesdata';
import FileSaver, { saveAs } from 'file-saver';
import axios from 'axios';
export default function Notes() {
  const depts = ['CSE 💻', 'ISE 🛰️', 'ECE 💡', 'CS-DS 🤖'];
  const noteslist = ['[Module-1]', '[Module-2]', '[Module-3]', '[Module-4]', '[Module-5]'];
  const years = ['🥇st Year', '🥈nd Year', '🥉rd Year', '🫡th Year'];
  const [yearbool, setyearbool] = useState(false);
  const [notesbool, setnotesbool] = useState(false);
  const [coursenumber,setcoursenumber] = useState(0);
  const [yearnumber,setyearnumber] = useState(0);
  // let selectedCourse;
  // Refactored rendercontent function to return JSX

  async function downloadpdf(pdfUrl,pdftitle){
    try {
      const response = pdfUrl !=="null" ? await axios.get(pdfUrl, { responseType: 'blob' }) : error("No File Found"); // Crucial: responseType: 'blob'
      saveAs(response.data, pdftitle || 'downloaded_file.pdf');
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  }

  const rendercontent = (elementsList, setboolFunc) => {
    return elementsList.map((element, index) => (

      <div
        key={!yearbool ? element.course_id : index}
        className="container flex w-full font-mono hover:text-amber-300 my-10"
        onClick={() => {
          setboolFunc(true)
          !yearbool ? setcoursenumber(element.course_id) : setyearnumber(index);
        }
        }
      >
        {/* cards section */}
        <div className="elements py-3 w-full text-left px-2 cursor-pointer">
          <span className="px-3 text-xl">{!yearbool ? element.course : element}</span>
        </div>
      </div>
    ));
  };

  const renderoperations = () =>{
    return [...Array(5)].map((_, index) => (
        <div key={index}>[Download Notes]</div>
      ));
  }

  const backfunc = ()=>{
    if(notesbool){
        setnotesbool(false)
    }
    else if(yearbool){
        setyearbool(false)
    }
  }
  return (
    <>
      <div className="maincontainer py-19 relative">
        {yearbool && (
          <span
            onClick={backfunc}
            className="text-left absolute top-10 left-3 px-2 py-2 cursor-pointer hover:text-amber-300 font-mono hover:border-amber-300 border-2 border-white"
          >
            {"👈🏻 Back"}
          </span>
        )}

        {notesbool
          ? <>
          <div className="container flex flex-col">
            {
            Noteslist[coursenumber-1].noteslist[yearnumber].map((element, index) => (

        <div
            key={index}
            className="container flex font-mono my-10 "
            // onClick={() => setboolFunc(true)}
        >
  {/* cards section */}
  <div className="elements py-3 w-full text-left px-2 py-2 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between w-full py-3 px-2">
    <span className="px-5 text-xl ">📁{element.module_name}</span>
    
    <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-3">
    {element.download_link && <> 
      <span className='w-full md:w-auto text-center hover:text-indigo-500 border-2 border-white p-2 mx-2 hover:border-blue-500'><button className='w-full md:w-auto cursor-pointer' onClick={()=>downloadpdf(element.download_link,element.module_name)}>Download</button></span>

    <span className='w-full md:w-auto text-center hover:text-red-500 border-2 border-white p-2 mx-2 hover:border-red-500'>{element.view_link && <Link className='w-full block md:w-auto' to={element.view_link} target='_blank'>View PDF</Link>}</span>
         </>}
         </div>
         {/* {console.log(element.download_link)} */}
  </div>
</div>
))}
            </div>
          </>
          : yearbool
          ? rendercontent(years, setnotesbool)
          : rendercontent(Noteslist, setyearbool)}
      </div>
    </>
  );
}
