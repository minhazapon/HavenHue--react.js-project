



const Service = () => {
    return (
        <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10 mb-10 mt-20 ml-5 mr-5">

            <div>


             <div>
                <p className=" text-5xl font-serif">Design Services</p>
                <p className=" mt-5 text-xl font-serif">We work in close collaboration with the entire<br></br> project team, ensuring optimal integration of all</p>
             </div>

             
             <div className=" mt-10">
                <p className=" text-5xl font-serif">Leading the Way</p>
                <p className=" mt-5 text-xl font-serif">Duis aute irure dolor in reprehenderit in voluptate<br></br> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur<br></br>  sint occaecat cupidatat non proident, sunt in culpa <br></br> qui officia deserunt mollit anim id est laborum.</p>
             </div>


             <div className=" mt-10">
              <p className=" text-3xl font-serif">We offer the following core services:</p>
               
               <div className=" mt-5">
               <li className=" mt-2 text-xl"> Interior Design</li>
               <li className=" mt-2 text-xl"> Interior Master Planning</li>
               <li className=" mt-2 text-xl"> Exterior Concept Direction</li>
               <li className=" mt-2 text-xl"> Sales And Marketing Support Services To Developers</li>
               <li className=" mt-2 text-xl"> Residential Purchasing Services</li>
               <li className=" mt-2 text-xl"> Accessorization & Styling</li>
               </div>
             


             </div>

             



            </div>


            <div>
                <button className=" btn h-[60px] w-[300px] bg-orange-600 text-white">Contact An Expert</button>
                <br></br>
                <button className="  h-[60px] w-[300px] mt-5 btn bg-orange-600 text-white">Share</button>
            </div>
            
        </div>
    );
};

export default Service;