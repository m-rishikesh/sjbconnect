
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';
import DataArrayIcon from '@mui/icons-material/DataArray';
export default function CreateCards (){
    return (
        <>
        <div className="maincon flex flex-col md:flex-row font-bold font-mono my-10 md:my-19 border-2 border-dashed border-white-500 shadow-xl px-5 md:px-20 py-5 md:py-10">
          <div className="container w-full md:w-1/3 text-center mb-5 md:mb-0">
            <PictureAsPdfIcon fontSize="large" />
            <br />
            <p>[ Download PDF ]</p>
            <p>You can Download the Pdf Notes Easily.</p>
          </div>
          <div className="container w-full md:w-1/3 text-center mb-5 md:mb-0">
            <SchoolIcon fontSize="large" />
            <p>[ Know Faculties ]</p>
            <p>Get to Know Your Faculties.</p>
          </div>
          <div className="container w-full md:w-1/3 text-center">
            <DataArrayIcon fontSize="large" />
            <br />
            <p>[ Hackathon ]</p>
            <p>Take Part in Hackathon.</p>
          </div>
        </div>
      </>
      
    )
}