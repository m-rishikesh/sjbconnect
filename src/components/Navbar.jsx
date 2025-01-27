import { Link } from "react-router-dom";


export default function Navbar(){
    return (
        <>
    <div className="font-mono container flex flex-row justify-between">
        <div className="leftitem  ">
            <h1 className="text-3xl font-bold text-white hover:text-amber-300"><a href="/">{"<SJBConnect/>"}</a></h1>
        </div>
        <div className="rightitem ">
            <Link to="/" className="px-2 font-bold hover:text-amber-300">[Home]</Link>
            <Link to="/notes" className="px-2 font-bold hover:text-amber-300">[Notes]</Link>
            <Link to="/about" className="px-2 font-bold hover:text-amber-300">[About]</Link>

        </div>
    </div>
    </>
    )
}