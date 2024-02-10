//Components
import Featured from "./Featured/Featured"
import Trendning from "./Trending/Trendning"
import useTableData1 from "../../../hooks/useTableData1";
import { getHomeTrending, getHomeFeatured } from "../../../utils/getData";

const FeaturedTrending = () => {
  return (
    <div className="Featured-Trending-Flexbox">
        <div className="Featured-Trending-Container">
          <div className="Featured-Trending-Container2">
              <Featured dataArray={useTableData1(getHomeFeatured)}/>
              <Trendning dataArray={useTableData1(getHomeTrending)}/>
          </div>
        </div>
    </div>
  )
}

export default FeaturedTrending