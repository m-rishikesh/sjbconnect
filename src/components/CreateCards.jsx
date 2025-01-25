
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';
import DataArrayIcon from '@mui/icons-material/DataArray';
export default function CreateCards (){
    return (
        <>
        <div className="maincon flex flex-row font-bold font-mono my-19 border-2 border-dashed border-white-500 shadow-xl px-20 py-10 ">
        <div className="container w-1/3 ">
        <PictureAsPdfIcon fontSize='large'/><br/>
            <p>[ Download PDF ]</p>
            <p>You can Download the Pdf Notes Easily.</p>
            
        </div>
        <div className="container w-1/3 ">
        <SchoolIcon fontSize='large'/>
            <p>[Know Faculties]</p>
            <p>Get to Know Your Faculties.</p>
        </div>
        <div className="container w-1/3 ">
        <DataArrayIcon fontSize='large'/><br/>
        <p>[Hackathon]</p>
        <p>Take Part of Hackhathon.</p>
        </div>
        </div>
        </>
    )
}