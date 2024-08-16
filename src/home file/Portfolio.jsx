


const Portfolio = () => {
    return (
        <div className=" bg-slate-200 p-10 mb-10 mt-20 ml-5 mr-5">

            <div>

             
             <div>
                <p className=" text-center font-serif text-5xl">Portfolio</p>
                <p className=" text-center mt-10 text-xl">"Home is the nicest word there is."<br></br> – Laura Ingalls Wilder</p>
             </div>

            {/* ------------------------------------------------- */}
            
            <div className=" mt-5 flex justify-center">
                <div className=" grid  md:grid-cols-3 gap-5">
                    <img className=" h-[200px] w-[300px] rounded-md" src="https://img.freepik.com/premium-photo/living-room_604472-130858.jpg?w=740" alt="" />
                    <img className=" h-[200px] w-[300px] rounded-md" src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-counter_105762-2105.jpg?t=st=1723808598~exp=1723812198~hmac=448cfcfee4590888d4a42582085a9f1f38e28af7932d1f97c0de217fc6c8f3e6&w=740" alt="" />
                    <img className=" h-[200px] w-[300px] rounded-md" src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2104.jpg?t=st=1723807824~exp=1723811424~hmac=6fcaa0f433efff2c590f5473fc3f1bfb969926bba07444fbac823637cf747ea2&w=740" alt="" />
                    <img className=" h-[200px] w-[300px] rounded-md" src="https://img.freepik.com/premium-photo/modern-living-room-with-contemporary-furniture-decor_1305385-2461.jpg?w=826" alt="" />
                    <img className=" h-[200px] w-[300px] rounded-md" src="https://img.freepik.com/premium-photo/modern-living-room-house-apartment-with-nature_952161-82745.jpg?w=826" alt="" />
                    <img className=" h-[200px] w-[300px] rounded-md" src="https://img.freepik.com/free-photo/interior-space-decorated-boho-style_23-2150771575.jpg?t=st=1723808672~exp=1723812272~hmac=5ef7d91c02815920bcd91378fdd855de7ace9b702a570b6ae135e8ffd0aa5b0f&w=740" alt="" />
                </div>
            </div>


            <div>
                <p className=" mt-5 text-center text-4xl">With experience across the residential,<br></br> commercial and retail sectors, our people<br></br> bring deep and complementary skills.</p>
            </div>




            </div>
            
        </div>
    );
};

export default Portfolio;