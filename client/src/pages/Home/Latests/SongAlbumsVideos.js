import LatestsContent from "./Content"
import useTableData from "../../../hooks/useTableData"
import { getHomeLatest } from "../../../utils/getData"

const SongAlbumsVideos = () => {
  return (
    <div className="LatestSong-Albums-Vidoes-Content">
      <div className="LatestSong-Albums-Vidoes-Content-Constraint">
        <div className="LatestSong-Albums-Vidoes-Content-Container">
          <LatestsContent title="Singles" dataArray={useTableData(getHomeLatest, "singles", null)} />
          <LatestsContent title="Albums" dataArray={useTableData(getHomeLatest, "albums", null)} />
          <LatestsContent title="Videos" dataArray={useTableData(getHomeLatest, "videos", null)} />
        </div>
      </div>
    </div>
  )
}

export default SongAlbumsVideos