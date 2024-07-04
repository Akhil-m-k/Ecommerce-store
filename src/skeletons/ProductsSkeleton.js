import { useEffect } from "react";
const CardSkeleton = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
    <div className="card-section min-h-lvh w-[100%] pb-10 sm:mx-auto flex flex-col items-center " >

        <div className=" w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-16 sm:gap-10  sm:px-10 px-8" >
            {Array(20).fill(0).map((_,index)=>{
                return(
                    <div key={index} className="card relative border p-3 pb-5 rounded-md shadow hover:shadow-2xl ">
                    <div className=" h-56 sm:h-40 w-full rounded-md  bg-gray-300"  alt=""></div>
                    <div className="truncate text-xl mt-2 h-6 rounded-md bg-gray-300"></div>
                    <div className=" truncate text-md mt-2 h-6 rounded-md bg-gray-300"></div>
                    <div className=" truncate text-md w-16 mt-2 h-6 rounded-md bg-gray-300"></div>
                    <div className="flex justify-between mt-2">
                    <span className="truncate h-6 w-16 py-1 px-2 rounded-md  bg-gray-300"></span>
                    <span className="font-bold h-6 w-16 bg-gray-300 rounded-md"></span>
                    </div>
                    <div className="shimmer"></div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default CardSkeleton;