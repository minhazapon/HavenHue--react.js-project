import { useEffect, useState } from "react";
import DesignDeateils from "./DesignDeateils";




const Design = () => {
    

    const [design, setDesign] = useState([])


    useEffect( ()=>{
       
        fetch('design.json')
        .then( res=> res.json())
        .then(data => setDesign(data))
   

    } , [])


    return (
        <div className=" mb-10 mt-10  ml-5 mr-5">

            <div>

            <div className=" flex justify-center">
            <a className=" text-center text-4xl font-bold  text-yellow-400 ">Haven<span className=" text-2xl text-orange-600">Hue</span> <span className=" text-black">Design</span></a>
            </div>

            <hr className=" mb-5 mt-5"></hr>


            <div className=" bg-slate-200 p-5  flex justify-center mt-10">
                <div className=" grid  md:grid-cols-3 gap-5 ">
                    {
                        design.map( design => <DesignDeateils design={design} ></DesignDeateils>  )
                    }
                </div>
            </div>




            </div>
            
        </div>
    );
};

export default Design;