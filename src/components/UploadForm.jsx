import React, { useState } from "react";

const UploadForm = () => {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("File:", file);

    // Reset form fields after submission
    setEmail("");
    setFile(null);

    // Clear the file input field manually
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

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-white mb-1">Upload PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
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
      </form>
    </div>
  );
};

export default UploadForm;
