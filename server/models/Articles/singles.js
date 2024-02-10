import Articles from "./articles.js"
import pool from "../../config/db.js";
import getDate from "../../utilities/getDate.js";
import imageColors from "../../APi's/imaggaColorExtract.js";

class Singles extends Articles {
    constructor(artist, title, customTitle, review, videoLink, spotifyLink, creditName, creditTwitter, creditIG) {
        super(artist, title, customTitle, review, creditName, creditTwitter, creditIG);
        this.videoLink = videoLink;
        this.spotifyLink = spotifyLink;
        
    }

    async save() {
        const timeStamp = getDate();
        console.log(`TimeStamp: ${timeStamp}`);
        const colors = await imageColors(this.imgLink);

        const sql = `
        INSERT INTO singles(
            timeStamp,
            artist, 
            title,
            customTitle, 
            review,
            imgLink,
            videoLink,
            spotifyLink,
            color1,
            color2,
            color3,
            creditName, 
            creditTwitter, 
            creditIG
        )
        VALUES(
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        )
        `;

        pool.query(sql, [
            timeStamp,
            this.artist,
            this.title,
            this.customTitle,
            this.review,
            this.imgLink,
            this.videoLink,
            this.spotifyLink,
            colors[0],
            colors[1],
            colors[2],
            this.creditName,
            this.creditIG,
            this.creditTwitter
        ]);

    }

}

export default Singles
