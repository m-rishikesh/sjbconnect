import axios from "axios";
import { useState } from "react";
const UploadHackForm = () =>{
   const [email, setEmail] = useState("");
   const [title, settitle] = useState("");
   const [venue, setvenue] = useState("");
   const [timedate, settimedate] = useState("");
   const [fee, setfee] = useState("");
   const [enddate, setenddate] = useState("");


 
   const handleSubmit = async(e) => {
     e.preventDefault();
     console.log("Email:", email);
     console.log("Title:", title);
     console.log("venue:", venue);
     console.log("timedate:", timedate);
     console.log("fee:", fee);
     console.log("enddate:", enddate);

     const formData = new FormData();
  formData.append("email", email);
  formData.append("title", title);
  formData.append("venue", venue);
  formData.append("datetime", timedate);
  formData.append("fee", fee);
  formData.append("lastdate", enddate);

    await axios.post(import.meta.env.VITE_POST_HACKATHON_UPDATES, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    console.log("Data sent successfully");
    alert("Form Submitted Successfully");
     setEmail("");
     settitle("")
     setvenue("")
     settimedate("")
     setfee("")
     setenddate("")
 
     e.target.reset();
   };
 
   return (
     <div className="flex justify-center items-center min-h-screen ">
       <form
         onSubmit={handleSubmit}
         className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 border border-white"
       >
         <h2 className="text-white text-lg font-semibold mb-4">Upload PDF</h2>
 
         {/* Email Input */}
         <div className="mb-4">
           <label className="block text-white mb-1">Email</label>
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
           />
         </div>
 
         {/* hackathon Title */}
         <div className="mb-4">
           <label className="block text-white mb-1">Hackathon Title</label>
           <input
             type="text"
             value={title}
             onChange={(e) => settitle(e.target.value)}
             required
             className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
           />
         </div>

          {/* hackathon Venue */}
          <div className="mb-4">
           <label className="block text-white mb-1">Hackathon Venue</label>
           <input
             type="text"
             value={venue}
             onChange={(e) => setvenue(e.target.value)}
             required
             className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
           />
         </div>

          {/* hackathon Timing */}
          <div className="mb-4">
           <label className="block text-white mb-1">Hackathon Date and Timing</label>
           <input
             type="text"
             value={timedate}
             onChange={(e) => settimedate(e.target.value)}
             required
             className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
           />
         </div>

          {/* hackathon Fee */}
          <div className="mb-4">
           <label className="block text-white mb-1">Hackathon Fee</label>
           <input
             type="text"
             value={fee}
             onChange={(e) => setfee(e.target.value)}
             required
             className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
           />
         </div>
        {/* end date */}
         <div className="mb-4">
           <label className="block text-white mb-1">Hackathon End Date</label>
           <input
             type="text"
             value={enddate}
             onChange={(e) => setenddate(e.target.value)}
             required
             className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
           />
         </div>
 
         {/* Submit Button */}
         <button
           type="submit"
           className="hover:cursor-pointer w-full mt-3 py-2 bg-white text-gray-900 font-semibold rounded hover:bg-gray-300 transition duration-300"
         >
           Submit
         </button>
       </form>
     </div>
   );
 };

export default UploadHackForm