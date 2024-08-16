

const Room = () => {
    return (
        <div className=" bg-slate-200 p-10 mb-10 mt-20 ml-5 mr-5">


            <div>

             <div>
                <p className=" text-center text-5xl font-serif">Extraordinary rooms with elegant, yet a<br></br> rustic atmosphere</p>
             </div>

            {/* --------------------------------------------------- */}


             <div className=" mt-10 flex justify-center ">


             <div className=" grid  md:grid-cols-3 gap-10">




             <div className="card bg-base-100 w-96 shadow-xl  ">
              <figure>
                <img className=" h-[250px] w-[400px]  "
                  src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/australian-modern-bedroom-interior-nature-window_31965-3690.jpg"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                Apartment - Ground Floor
                
                </h2>
                <p className=" text-2xl">44 m²</p>
                <p>This apartment features a electric kettle, sofa and private entrance.</p>
                <div>
                    <p className=" btn border-[1px] border-gray-500">Book Room</p>
                </div>
              </div>
            </div>


             <div className="card bg-base-100 w-96 shadow-xl  ">
              <figure>
                <img className=" h-[250px] w-[400px]  "
                  src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                Double Deluxe Room

                
                </h2>
                <p className=" text-2xl">55 m²</p>
                <p>In the room, designed by Space Copenhagen, every detail is</p>
                <div>
                    <p className=" btn border-[1px] border-gray-500">Book Room</p>
                </div>
              </div>
            </div>



             <div className="card bg-base-100 w-96 shadow-xl  ">
              <figure>
                <img className=" h-[250px] w-[400px]  "
                  src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/australian-modern-bedroom-interior-nature-window_31965-3690.jpg"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                Apartment with Park View
                
                </h2>
                <p className=" text-2xl">74 m²</p>
                <p>This apartment has a dining area, private entrance and kitchen.</p>
                <div>
                    <p className=" btn border-[1px] border-gray-500">Book Room</p>
                </div>
              </div>
            </div>




















             </div>










             </div>





            </div>
            
        </div>
    );
};

export default Room;