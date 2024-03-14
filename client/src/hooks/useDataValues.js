import { useEffect, useState } from "react";

const useDataValues = (Data) => {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [customTitle, setCustomTitle] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [review, setReview] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [creditName, setCreditName] = useState("");
  const [creditTwitter, setCreditTwitter] = useState("");
  const [creditIG, setCreditIG] = useState("");
  const [table, setTable] = useState("")
  const [articleLink, setArticleLink] = useState("");
  const [id, setID] = useState("")
  const [albumsTitle, setAlbumsTitle] = useState("")
  
    useEffect(() => {
      const setValues = async () => {
        if(Data){
          try {
              const dateData = new Date(Data.timeStamp);
              const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
              const date = dateData.toLocaleString('en-US', options);
              const imgImport = await import((`../assets/${Data.imgLink}`));

              const artLinkSpace = Data.artist + " - " + Data.title;
              const artLink = artLinkSpace.split(" ").join("");

              setArtist(Data.artist);
              setTitle(Data.title);
              setReview(Data.review);
              setCustomTitle(Data.customTitle);
              setTimeStamp(date);
              setImgLink(imgImport.default);
              setVideoLink(Data.videoLink);
              setSpotifyLink(Data.spotifyLink);
              setColor1(Data.color1);
              setColor2(Data.color2);
              setColor3(Data.color3);
              setCreditName(Data.creditName);
              setCreditTwitter(Data.creditTwitter);
              setCreditIG(Data.creditIG);
              setTable(Data.table_name);
              setArticleLink(artLink);
              setID(Data.id)
              setAlbumsTitle(Data.albumsTitle)
          } catch (error) {
            console.error(error);
          }
        }
      };
      setValues();
    }, [Data]);

    return { artist, title, customTitle, timeStamp, review, imgLink, videoLink, spotifyLink, color1, color2, color3, creditName, creditTwitter, creditIG, table, articleLink, id, albumsTitle };
}

export default useDataValues;