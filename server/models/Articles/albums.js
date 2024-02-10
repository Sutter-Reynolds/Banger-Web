import Articles from "./articles.js";
import pool from "../../config/db.js";
import getDate from "../../utilities/getDate.js";
import imageColors from "../../APi's/imaggaColorExtract.js";

class Albums extends Articles {
    constructor(artist, title, customTitle, review, spotifyLink, creditName, creditTwitter, creditIG) {
        super(artist, title, customTitle, review, creditName, creditTwitter, creditIG);
        this.spotifyLink = spotifyLink;
    }

    async save() {
        const timeStamp = getDate();
        console.log(`TimeStamp: ${timeStamp}`);
        console.log(this.imgLink)
        const colors = await imageColors(this.imgLink);

        const sql = `
        INSERT INTO albums(
            timeStamp,
            artist, 
            title,
            customTitle, 
            review,
            imgLink,
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
            this.spotifyLink,
            colors[0],
            colors[1],
            colors[2],
            this.creditName,
            this.creditIG,
            this.creditTwitter
        ]);

    }

    static async getAlbumById(artist, title) {
        const sql = `
            SELECT id
            FROM albums
            WHERE artist = ? AND title = ?;
        `;

        return await pool.query(sql, [artist, title]);
    }

}

export default Albums;