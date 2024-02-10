import Articles from "./articles.js";
import pool from "../../config/db.js";
import getDate from "../../utilities/getDate.js";
import imageColors from "../../APi's/imaggaColorExtract.js";

class Videos extends Articles {
    constructor(artist, title, customTitle, review, creditName, creditTwitter, creditIG) {
        super(artist, title, customTitle, review, creditName, creditTwitter, creditIG);
        this.videoLink = videoLink;
    }

    async save() {
        const timeStamp = getDate();
        console.log(`TimeStamp: ${timeStamp}`);
        const colors = await imageColors(this.imgLink);

        const sql = `
        INSERT INTO videos(
            timeStamp,
            artist, 
            title,
            customTitle, 
            review,
            imgLink,
            videoLink,
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
            ?
        )
        `;

        await pool.query(sql, [
            timeStamp,
            this.artist,
            this.title,
            this.customTitle,
            this.review,
            this.imgLink,
            this.videoLink,
            colors[0],
            colors[1],
            colors[2],
            this.creditName,
            this.creditIG,
            this.creditTwitter
        ]);

    }


}

export default Videos