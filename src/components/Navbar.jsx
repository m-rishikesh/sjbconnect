import { useState } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" text-white p-4">
            <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
                {/* Logo (Centered on Mobile) */}
                <h1 className="text-3xl font-bold hover:text-amber-300 mb-4 md:mb-0">
                    <Link to="/">{"<SJBConnect/>"}</Link>
                </h1>
                
                {/* Navigation Links */}
                <div className="rightitem flex flex-row md:flex-row items-center">
                    <Link to="/" className="px-2 font-bold hover:text-amber-300">[Home]</Link>
                    <Link to="/notes" className="px-2 font-bold hover:text-amber-300">[Notes]</Link>
                    <Link to="/about" className="px-2 font-bold hover:text-amber-300">[About]</Link>
                </div>
            </div>
        </nav>
    );
}
