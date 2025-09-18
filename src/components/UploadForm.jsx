import React, { useState } from "react";

const UploadForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("year", year);
    formData.append("branch", branch);
    formData.append("file", file);

await fetch(import.meta.env.VITE_POST_NOTES_DATA, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Form Submitted Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Reset form fields after submission
    setEmail("");
    setBranch("");
    setYear("");
    setSubject("");
    setFile(null);
    setLoading(false);

    // Clear the file input field manually
    e.target.reset();
  };

  const handlefilesubmit = (e) =>{
      const selectedfile = e.target.files[0]
      if(selectedfile){
        if(selectedfile.type!='application/pdf' && !selectedfile.name.endsWith('.pdf')){
          alert('Please select a PDF file.');
          e.target.value = ''; // Clear the input
          setFile(null);
          return;
        }
        setFile(selectedfile);
      }
  }

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

        <div className="mb-4">
          <label className="block text-white mb-1">Subject+Module</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Branch</label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="ISE">ISE</option>
            <option value="CS-DS">CS-DS</option>
          </select>
        </div>
           
        <div className="mb-4">
          <label className="block text-white mb-1">Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-white mb-1">Upload PDF</label>
          <input
            type="file"
            accept=".pdf,application/pdf"
            onChange={handlefilesubmit}
            required
            className="w-full px-3 py-2 bg-gray-900 text-white border border-white rounded focus:outline-none focus:ring-2 focus:ring-white file:bg-gray-700 file:text-white file:border-none file:rounded file:px-3 file:py-1 file:mr-3 file:cursor-pointer"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="hover:cursor-pointer w-full mt-3 py-2 bg-white text-gray-900 font-semibold rounded hover:bg-gray-300 transition duration-300"
        >
          Submit
        </button>
      {loading && (<p className="text-white text-center mt-2">Uploading...</p>)}
      </form>
    </div>
  );
};

export default UploadForm;
