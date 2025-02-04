import { Link } from "react-router-dom"
import About from "./About"
export default function Hero(){
    return (
        <>
        <div className="container my-19"></div>
        <h1 className="text-5xl font-bold font-mono">Connect SJB-itan's.</h1>
        <button className="hover:text-red-500 font-bold my-10 mx-3"><Link to = '/faculty'>[🧑‍🏫 Know Your Faculty ]</Link></button>
        <button className="hover:text-blue-500 font-bold my-10"><Link to = '/updates'>[ 🧑‍💻Hackathon Updates  ]</Link></button>
        </>
    )
}