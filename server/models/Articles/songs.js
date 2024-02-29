import Albums from "./albums.js";
import pool from "../../config/db.js";

class Songs extends Albums {
    constructor(title, review, spotifyLink, albumArtist, albumTitle) {
        this.title = title;
        this.review = review;
        this.spotifyLink = spotifyLink;
        this.albumArtist = albumArtist;
        this.albumTitle = albumTitle;
    }

    async save() {
        const [albumIdInfo, _] = await this.getAlbumById(this.albumArtist, this.albumTitle);
        const albumId = albumIdInfo[0].id;
        const sql = `
        INSERT INTO songs(
            title,
            review,
            spotifyLink,
            albumsId
        )
        VALUES(
            ?,
            ?,
            ?,
            ?
        )
        `;

        pool.query(sql, [
            this.title,
            this.review,
            this.spotifyLink,
            albumId
        ]);

    }

    static async getSongByAlbumId(table, albumId) {
        const sql = `
        SELECT title, review, spotifyLink 
        FROM ?? 
        WHERE albumsId = ?;
        `

        return await pool.query(sql, [table, albumId])
    }

}

export default Songs;