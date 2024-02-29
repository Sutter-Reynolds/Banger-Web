//Components
import Featured from "./Featured/Featured"
import Latest from "./Latest/Latest"
import Articles from "./Articles/Articles"
import useTableData from "../../hooks/useTableData"
import { useState, useEffect } from "react"
import { getLatestTable, getRecentWithPage, getTableFeatured, } from "../../utils/getData"

//Style Sheets
import "../../styles/singles-albums-videos.css"
import "../../styles/utils/shade.css"


const SinglesAlbumsVideos = ({ table }) => {
  const [load, setLoad] = useState(0);
  const [viewArticles, setViewArticles] = useState([]);
  useEffect(() => {
    setLoad(0);
    setViewArticles([]);
  }, [table])


  return (
    <>
      <Featured dataArray={useTableData(getTableFeatured, table, null)} type={table} />
      <Latest dataArray={useTableData(getLatestTable, table, null)} type={table} />
      <Articles dataArray={useTableData(getRecentWithPage, table, load)} viewArticles={viewArticles} type={table} setLoad={setLoad} load={load} />
    </>
  )
}

export default SinglesAlbumsVideos