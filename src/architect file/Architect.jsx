import ARBanner from "./ARBanner";
import We from '../home file/We'
import Products from "./Products";
import Interior from "./Interior";
import Our from "./Our";
import Builds from "./Builds";
import High from "./High";




const Architect = () => {
    return (
        <div className=" mb-10 mt-20 ml-5 mr-5">

            <div>



              <ARBanner></ARBanner>
              <We></We>
              <Products></Products>
              <Interior></Interior>
              <Our></Our>
              <Builds></Builds>
              <High></High>




                
            </div>
            
        </div>
    );
};

export default Architect;