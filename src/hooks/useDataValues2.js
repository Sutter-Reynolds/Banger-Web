import { useEffect, useState } from "react";

const useDataValues2 = (Data) => {
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");
    const [timeStamp, setTimeStamp] = useState("");
    const [customTitle, setCustomTitle] = useState("");
    const [review, setReview] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [articleLink, setArticleLink] = useState("");
  
    useEffect(() => {
      const setValues = async () => {
        try {
          if(Data){
            const dateData = new Date(Data.timeStamp);
            const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
            const date = dateData.toLocaleString('en-US', options);

            const imgImport = await import((`../assets/${Data.imgLink}`));
            const artLinkSpace = Data.artist + " - " + Data.title;
            const artLink = artLinkSpace.split(" ").join("");

            setArtist(Data.artist);
            setTitle(Data.title);
            setTimeStamp(date);
            setCustomTitle(Data.customTitle);
            setReview(Data.review);
            setImgLink(imgImport.default);
            setArticleLink(artLink);
          }
        } catch (error) {
          console.error(error);
        }
      };
      setValues();
    }, [Data]);

    return { timeStamp, customTitle, review, imgLink, artist, title, articleLink };
}

export default useDataValues2;