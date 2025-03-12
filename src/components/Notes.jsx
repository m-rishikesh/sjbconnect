import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Noteslist from "../db/notesdata";
import FileSaver, { saveAs } from "file-saver";
import axios from "axios";
import { use } from "react";

export default function Notes() {
  const depts = ["CSE", "ISE", "ECE", "CS-DS"];
  const depts_graphities = ["💻 CSE", "🛰️ ISE", "💡 ECE", "🤖 CS-DS"];
  const years_graphities = ["🥇st Year", "🥈nd Year", "🥉rd Year", "🫡th Year"];
  const years = ["1","2","3","4"];
  const [notes,setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [yearbool, setyearbool] = useState(false);
  const [notesbool, setnotesbool] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  useEffect(() => {const loadNotes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/getnotes`);
      setNotes(response.data); 
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false); 
    }
  };

  loadNotes();
    }
    , []);

  async function downloadpdf(pdfUrl, pdftitle) {
    if (!pdfUrl || pdfUrl === "null") {
      console.error("No File Found");
      return;
    }
    try {
      const response = await axios.get(pdfUrl, { responseType: "blob" });
      saveAs(response.data, pdftitle || "downloaded_file.pdf");
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  }

  const rendercontent = (elementsList, setboolFunc, isCourseSelection) => {
    return elementsList.map((element, index) => (
      <div
        key={index}
        className="container flex w-full hover:text-amber-300 my-10"
        onClick={() => {
          setboolFunc(true);
          if (isCourseSelection) {
            setSelectedCourse(depts[index]);
          } else {
            setSelectedYear(years[index]);
          }
        }}
      >
        <div className="elements py-3 w-full text-left px-2 cursor-pointer">
          <span className="px-3 text-xl">{isCourseSelection ? element : element}</span>
        </div>
      </div>
    ));
  };

  const filteredNotes = notes.filter(
    (note) => note.branch === selectedCourse && String(note.year) === selectedYear
  );

  const backfunc = () => {
    if (notesbool) {
      setnotesbool(false);
    } else if (yearbool) {
      setyearbool(false);
      setSelectedCourse("");
      setSelectedYear("");
    }
  };

  return (
    <>
      <div className="maincontainer py-19 relative">
        {yearbool && (
          <span
            onClick={backfunc}
            className="text-left absolute top-10 left-3 px-2 py-2 cursor-pointer hover:text-amber-300  hover:border-amber-300 border-2 border-white"
          >
            {"👈🏻 Back"}
          </span>
        )}

        {notesbool ? (
          <div className="container flex flex-col">
            {filteredNotes.length > 0 ? (
              filteredNotes.map((element, index) => (
                <div key={index} className="container flex my-2">
                  <div className="elements py-3 w-full text-left px-2 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between">
                    <span className="px-5 text-xl">📁 {element.subject} (Module {element.module})</span>

                    <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2">
                      {element.noteslink && element.noteslink !== "null" ? (
                        <>
                          <span className="w-full md:w-auto text-center hover:text-indigo-500 border-2 border-white p-2 mx-6 hover:border-blue-500">
                            <button
                              className="w-full md:w-auto cursor-pointer"
                              onClick={() => downloadpdf(element.noteslink, element.subject)}
                            >
                              Download
                            </button>
                          </span>

                          <span className="w-full md:w-auto text-center hover:text-red-500 border-2 border-white p-2 mx-6 hover:border-red-500">
                            <Link className="w-full block md:w-auto" to={element.noteslink} target="_blank">
                              View PDF
                            </Link>
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-400">Not Available</span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">No notes available for the selected course and year.</p>
            )}
          </div>
        ) : yearbool ? (
          rendercontent(years_graphities, setnotesbool, false)
        ) : (
          rendercontent(depts_graphities, setyearbool, true)
        )}
      </div>
    </>
  );
}
