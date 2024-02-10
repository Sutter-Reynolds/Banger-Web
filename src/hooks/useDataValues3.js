import { useEffect, useState } from "react";

const useDataValues3 = (Data) => {
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [articleLink, setArticleLink] = useState("");
  
    useEffect(() => {
      const setValues = async () => {
        if(Data){
          try {
              const imgImport = await import((`../assets/${Data.imgLink}`));
              const artLinkSpace = Data.artist + " - " + Data.title;
              const artLink = artLinkSpace.split(" ").join("");
              
              setArtist(Data.artist);
              setTitle(Data.title);
              setReview(Data.review);
              setImgLink(imgImport.default);
              setArticleLink(artLink);
          } catch (error) {
            console.error(error);
          }
        }
      };
      setValues();
    }, [Data]);

    return { artist, title, review, imgLink, articleLink };
}

export default useDataValues3;