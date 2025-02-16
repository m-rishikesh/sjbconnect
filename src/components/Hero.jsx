import { Link } from "react-router-dom"
import About from "./About"
export default function Hero(){
    return (
        <>
        <div className="container my-19"></div>
        <h1 className="md:text-5xl font-bold  text-xl my-20">{"<Connect SJB-itan's/>"}</h1>
        <h2>
        <Link to="/upload" className="p-2 my-15  hover:border-blue-500 hover:text-blue-500 border-2 border-white">⬆️ Upload The Notes</Link>
        </h2>
        <button className="hover:text-red-500 font-bold my-10 mx-3"><Link to = '/faculty'>[🧑‍🏫 Know Your Faculty ]</Link></button>
        <button className="hover:text-blue-500 font-bold "><Link to = '/updates'>[ 🧑‍💻Hackathon Updates  ]</Link></button>
        </>
    )
}