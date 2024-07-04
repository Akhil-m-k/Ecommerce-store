
import {Link} from "react-router-dom";
import {useEffect} from "react";

const EmtyCart = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="grid place-items-center min-h-screen pt-28">
        <div className="flex flex-col items-center gap-3">
         <img src="" alt="" className="max-w-80"/>
        <h2 className="text-xl font-bold mb-1 ">Your cart is emty</h2>
        <Link to="/" className="bg-[dodgerblue] px-3 py-2 rounded-md text-white">Go to Home</Link>
        </div>
        </div>
    )
}

export default EmtyCart;