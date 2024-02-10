//Components
import FeaturedTrending from "./FeaturedTrending/FeaturedTrending";
import Latests from "./Latests/Latests";

//Style Sheets
import "../../styles/home.css";
import "../../styles/utils/imgFitter.css";
import UpcomingArtists from "./UpcomingArtists/UpcomingArtists";

const Home = () =>{
    return (
        <>
            <FeaturedTrending/>
            <Latests/>
            <UpcomingArtists/>
        </>
    )
}

export default Home