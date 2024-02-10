import { useEffect, useState } from "react";

const useDataValues4 = (Data) => {
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("");
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
              setColor1(Data.color1);
              setColor2(Data.color2);
              setColor3(Data.color3);
              setArticleLink(artLink);
          } catch (error) {
            console.error(error);
          }
        }
      };
      setValues();
    }, [Data]);

    return { artist, title, review, imgLink, color1, color2, color3, articleLink };
}

export default useDataValues4;