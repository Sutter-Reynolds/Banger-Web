import { useEffect, useState } from "react";

const useDataValues1 = (Data) => {
    const [artist, setArtist] = useState("");
    const [title, setTitle] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [articleLink, setArticleLink] = useState("");
    const [table, setTable] = useState("");
  
    useEffect(() => {
      const setValues = async () => {
        if(Data){
            try {
                const imgImport = await import((`../assets/${Data.imgLink}`));
                const artLinkSpace = Data.artist + " - " + Data.title;
                const artLink = artLinkSpace.split(" ").join("");
                setArtist(Data.artist);
                setTitle(Data.title);
                setImgLink(imgImport.default);
                setArticleLink(artLink);
                setTable(Data.table_name);
            } catch (error) {
              console.error(error);
            }
        }
      };
      setValues();
    }, [Data]);

    return { artist, title, imgLink, articleLink, table};
}

export default useDataValues1;