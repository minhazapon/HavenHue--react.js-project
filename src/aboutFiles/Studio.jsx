


const Studio = () => {
    return (
        <div className="  mb-10 mt-20 ml-5 mr-5">

            <div>


             <div>
                <p className=" text-center text-6xl font-serif">We ​are an interior design studio committed<br></br> to creating transformative spaces</p>
             </div>


             
             {/* ---------------------------------- */}

             <div className=" mt-10  flex justify-center  bg-no-repeat bg-cover  p-64 rounded-xl bg-fixed" 
              style={{
                backgroundImage: "url(  https://img.freepik.com/premium-photo/inspiring-office-interior-design-industrial-style-generative-ai-aig-31_31965-208602.jpg?w=826  )",
              }}
             
             >


             <div className=" bg-gradient-to-r from-black  p-10  grid  md:grid-cols-4 gap-20">



              <div className=" bg-white border-[1px] border-gray-400 w-[200px] h-[200px] p-5">
               <p className=" text-center text-2xl font-serif">awards won</p>
               <p className=" text-center text-8xl font-serif text-orange-600">17</p>
              </div>


              <div className=" bg-white border-[1px] border-gray-400 w-[200px] h-[200px] p-5">
               <p className=" text-center text-2xl font-serif">XP YEARS</p>
               <p className=" text-center text-8xl font-serif text-orange-600">12+</p>
              </div>


              <div className=" bg-white border-[1px] border-gray-400 w-[200px] h-[200px] p-5">
               <p className=" text-center text-2xl font-serif">clients</p>
               <p className=" text-center text-8xl font-serif text-orange-600">108</p>
              </div>


              <div className=" bg-white border-[1px] border-gray-400 w-[200px] h-[200px] p-5">
               <p className=" text-center text-2xl font-serif">projects</p>
               <p className=" text-center text-8xl font-serif text-orange-600">150</p>
              </div>
             
















             </div>








             </div>


             <div className=" flex justify-center mt-10 ">
                <button className=" btn bg-orange-600 w-[300px] text-white">Contact Us</button>
             </div>




            </div>
            
        </div>
    );
};

export default Studio;