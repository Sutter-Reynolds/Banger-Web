import { useEffect, useState } from "react";
import { getSongByAlbumId } from "../utils/getData";

const useAlbumsSongs = (id) => {
  const [albumSongsData, setAlbumSongsData] = useState([]);


  useEffect(() => {
    const fetchAlbumSongsData = async () => {
      if (id !== null && id !== undefined && id !== "") {
        const data = await getSongByAlbumId(id);
        
        const dataArray = data.map(dataVal => {
          const {title, review, spotifyLink } = dataVal;
          return { title, review, spotifyLink }
        });

        setAlbumSongsData(dataArray);
      }
    };

    fetchAlbumSongsData();
  }, [id]);

  return albumSongsData;
}

export default useAlbumsSongs;