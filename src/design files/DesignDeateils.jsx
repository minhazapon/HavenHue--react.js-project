


const DesignDeateils = ({design}) => {

    const {img, name, location, details} = design



    return (
        <div>

            <div className=" ">


            <div className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img className=" h-[250px] w-[400px] "
                  src={img}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {name} </h2>
                <h2 className="card-title">Location: {location} </h2>
                <p>{details}</p>
              </div>
            </div>











            </div>
            
        </div>
    );
};

export default DesignDeateils;