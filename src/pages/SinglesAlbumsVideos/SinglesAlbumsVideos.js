//Components
import Featured from "./Featured/Featured"
import Latest from "./Latest/Latest"
import Articles from "./Articles/Articles"
import useTableData2 from "../../hooks/useTableData2"
import useTableData3 from "../../hooks/useTableData3"
import { getLatestTable, getLatestWithOffeset ,getTableFeatured } from "../../utils/getData"

//Style Sheets
import "../../styles/singles-albums-videos.css"
import "../../styles/utils/shade.css"


const SinglesAlbumsVideos = ({table}) => {
  return (
    <>
      <Featured dataArray={useTableData2(getTableFeatured, table)} type={table}/>
      <Latest dataArray={useTableData2(getLatestTable, table)} type={table}/>
      <Articles dataArray={useTableData3(getLatestWithOffeset, table, 0)} type={table}/>
    </>
  )
}

export default SinglesAlbumsVideos