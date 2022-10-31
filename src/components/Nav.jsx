import { Link } from "react-router-dom";


export const Nav = () => 
    <div className="relative flex justify-between bg-black text-white items-center z-100">
        <div className="absolute inset-0
        bg-pink-500 blur-xl
        hover:bg-pink-800 hover:blur-2xl
        -z-10"></div>
        <div className="relative ml-5 z-20 text-2xl
        bg-gradient-to-r from-pink-600 to-purple-600 font-bold
        hover:from-pink-500 hover:to-purple-300 font-black
        text-transparent bg-clip-text 
        ">
            Book & Mark
        </div>
        <div className="relative flex justify-center items-center mr-5">
            <div className="hover:bg-blue-300/[.5] hover:rounded p-3">
                <Link to="gugu">구구단</Link>
            </div>
            <div className="hover:bg-red-300/[.5] hover:rounded p-3">
                <Link to="/">Home</Link>
            </div>
            <div className="hover:bg-purple-300/[.5] hover:rounded p-3">
                <Link to="/about">About</Link>
            </div>
        </div>
    </div>