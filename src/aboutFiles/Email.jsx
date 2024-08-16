

const Email = () => {
    return (
        <div className=" mb-10 mt-20 ml-5 mr-5">


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10">

              <div className=" bg-orange-600 h-[300px] w-[400px] p-5 rounded-xl text-white">

               <p className=" text-2xl">Email</p>
                <input className=" mt-3 h-[30px] w-[200px] border-[1px] border-gray-400 " type="email" name= "" id="" />
               <p className=" mt-2 text-2xl">Phone</p>
                <input className=" mt-3 h-[30px] w-[200px] border-[1px] border-gray-400 " type="number" name="" id="" />
                <div className=" mt-5">

                    <p className=" text-2xl">Location</p>
                    <p className=" text-xl">28 Jackson Blvd Ste 1020 Chicago IL<br></br> 60604-2340</p>

                </div>


              </div>


              {/* ------------------------------------------------------ */}

              <div>

                 <img className=" rounded-lg" src="https://img.freepik.com/free-photo/rendering-elegant-neoclassical-interior_23-2151059680.jpg?t=st=1723816136~exp=1723819736~hmac=75a7658af1bd546daf0210db2717d712f34ebecf27fb38d59e8b09fc64ee16e4&w=360" alt="" />


              </div>






            </div>
            
        </div>
    );
};

export default Email;