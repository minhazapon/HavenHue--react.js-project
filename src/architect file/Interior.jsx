



const Interior = () => {
    return (
        <div className=" mb-10 mt-20 ml-5 mr-5">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-20">
             
             <div>
                <p className=" text-xl font-serif text-slate-600">Interior Design</p>
                <p className=" text-5xl  mt-5 font-bold">Interior space<br></br> planning</p>
                <p className=" mt-10 ">Planning is an integral part of interior<br></br> design. Space planning begins at the <br></br>architectural level. If you want a <br></br>room to be of a specific size it has <br></br>to be built with those dimensions. <br></br>To change the room size of an existing<br></br> structure it would require structural<br></br> modifications to the interiors.</p>
                <button className=" mt-10 text-xl bg-orange-600 btn text-white">Try Now</button>
             </div>


            {/* ---------------------------------------- */}

            

            <div className=" flex justify-center">
                

                <div className=" grid  md:grid-cols-2">
                  

                  {/* ----------------- */}
                  <div className=" bg-no-repeat bg-contain  h-[300px] w-[300px] p-20 "
                    style={{
                        backgroundImage: "url(  https://img.freepik.com/premium-photo/indoor-3d-apartment-carpet-comfortable-contemporary-couch-dining-floor-furniture-hotel-la_1212440-15164.jpg?w=740 )",
                      }}
                  >
                    <div className=" bg-gradient-to-r from-black p-2">
                        <p className="  text-white text-center text-3xl font-serif">Consultations</p>
                        <div className=" flex justify-center items-center ">
                        <img className=" h-[80px]" src="https://cdn-icons-png.flaticon.com/128/1974/1974037.png" alt="" />
                        </div>
                    </div>
                  </div>
                  {/* ----------------- */}


                  {/* ----------------- */}
                  <div className=" bg-no-repeat bg-contain  h-[300px] w-[300px] p-20 "
                    style={{
                        backgroundImage: "url(  https://img.freepik.com/premium-photo/living-room-with-couch-coffee-table-lamp_1078211-549666.jpg?w=740 )",
                      }}
                  >
                    <div className=" bg-gradient-to-r from-black p-2">
                        <p className="  text-white text-center text-3xl font-serif">Planning</p>
                        <div className=" flex justify-center items-center ">
                        <img className=" h-[80px]" src="https://cdn-icons-png.flaticon.com/128/16288/16288035.png" alt="" />
                        </div>
                    </div>
                  </div>
                  {/* ----------------- */}


                  {/* ----------------- */}
                  <div className=" bg-no-repeat bg-contain  h-[300px] w-[300px] p-20 "
                    style={{
                        backgroundImage: "url(  https://img.freepik.com/premium-photo/livingroom-interior-scandinavian-style-3d-render_1028938-253312.jpg?w=740 )",
                      }}
                  >
                    <div className=" bg-gradient-to-r from-black p-2">
                        <p className="  text-white text-center text-3xl font-serif">Accessories</p>
                        <div className=" flex justify-center items-center ">
                        <img className=" h-[80px]" src="https://cdn-icons-png.flaticon.com/128/10909/10909753.png" alt="" />
                        </div>
                    </div>
                  </div>
                  {/* ----------------- */}


                  {/* ----------------- */}
                  <div className=" bg-no-repeat bg-contain  h-[300px] w-[300px] p-20 "
                    style={{
                        backgroundImage: "url(  https://img.freepik.com/premium-photo/living-room-with-couch-coffee-table-tv_1078211-528782.jpg?w=740 )",
                      }}
                  >
                    <div className=" bg-gradient-to-r from-black p-2">
                        <p className="  text-white text-center text-3xl font-serif">
                        LivingRooms</p>
                        <div className=" flex justify-center items-center ">
                        <img className=" h-[80px]" src="https://cdn-icons-png.flaticon.com/128/13375/13375974.png" alt="" />
                        </div>
                    </div>
                  </div>
                  {/* ----------------- */}





                </div>




            </div>








            </div>
            
        </div>
    );
};

export default Interior;