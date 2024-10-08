import Banner from "./home file/Banner";
import Company from "./home file/Company";
import Design from "./home file/Design";
import FURDesign from "./home file/FURDesign";
import Info from "./home file/Info";
import IntoCard from "./home file/IntoCard";
import Portfolio from "./home file/Portfolio";
import Room from "./home file/Room";
import We from "./home file/We";
import Work from "./home file/Work";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <IntoCard></IntoCard>
            <Info></Info>
            <We></We>
            <Design></Design>
            <Room></Room>
            <FURDesign></FURDesign>
            <Company></Company>
            <Work></Work>
            <Portfolio></Portfolio>
            
        </div>
    );
};

export default Home;