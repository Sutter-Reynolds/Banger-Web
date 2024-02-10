import LatestsContent from "./Content"
import useTableData2 from "../../../hooks/useTableData2"
import { getHomeLatest } from "../../../utils/getData"

const SongAlbumsVideos = () => {
  return (
    <div className="LatestSong-Albums-Vidoes-Content">
        <div className= "LatestSong-Albums-Vidoes-Content-Constraint">
            <div className="LatestSong-Albums-Vidoes-Content-Container">
                <LatestsContent title="Singles" dataArray={useTableData2(getHomeLatest, "singles")}/>
                <LatestsContent title="Albums" dataArray={useTableData2(getHomeLatest, "albums")}/>
                <LatestsContent title="Videos" dataArray={useTableData2(getHomeLatest, "videos")}/>
            </div> 
        </div>
    </div>
  )
}

export default SongAlbumsVideos