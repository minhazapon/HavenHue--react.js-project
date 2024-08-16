


const Work = () => {
    return (
        <div className=" mb-10 mt-20 ml-5 mr-5">


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-20">

             
             <div>

               <img className=" h-[300px] w-[400px] rounded-lg" src="https://img.freepik.com/premium-photo/businessman-luxury-office_506452-9349.jpg?w=740" alt="" />

               <p  className=" mt-5 text-3xl">We offer work at all stages until<br></br> the completion of the project</p>

               <p className=" text-xl mt-5">"Good design is all about making other designers <br></br>feel like idiots because that idea wasn’t theirs." <br></br> – Frank Chimero</p>




             </div>



            {/* ---------------------------------------- */}


             <div>

               <div className=" bg-slate-200 w-[400px] p-5">
                <img className=" h-[60px]" src="https://cdn-icons-png.flaticon.com/128/17400/17400148.png" alt="" />
                <p>“I think a good designer is an anthropologist<br></br> – it requires a certain amount of daring and<br></br> erudition; to take risks, stimulate the senses,<br></br> and explore personal style. You can tell the<br></br> designers who work viscerally – their work is uplifting<br></br> in its experiential quality which, to me,<br></br> is entirely the point of design”</p>
               </div>
               
               <div>
                <p className=" mt-5">"A room should never allow the eye to settle in one<br></br> place. It should smile at you and create fantasy." <br></br>– Juan Montoya</p>
               </div>

               <div>
                <button className=" mt-5 bg-orange-600 btn  text-white">Learn More</button>
               </div>


             </div>







            </div>
            
        </div>
    );
};

export default Work;