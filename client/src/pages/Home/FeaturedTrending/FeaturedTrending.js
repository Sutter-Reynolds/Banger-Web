//Components
import Featured from "./Featured/Featured"
import Trendning from "./Trending/Trendning"
import useTableData from "../../../hooks/useTableData";
import { getHomeTrending, getHomeFeatured } from "../../../utils/getData";

const FeaturedTrending = () => {
  return (
    <div className="Featured-Trending-Flexbox">
        <div className="Featured-Trending-Container">
          <div className="Featured-Trending-Container2">
              <Featured dataArray={useTableData(getHomeFeatured, null, null)}/>
              <Trendning dataArray={useTableData(getHomeTrending, null, null)}/>
          </div>
        </div>
    </div>
  )
}

export default FeaturedTrending