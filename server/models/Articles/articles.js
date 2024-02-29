import pool from "../../config/db.js";

class Articles {
    constructor(artist, title, customTitle, review, creditName, creditTwitter, creditIG) {
        this.artist = artist;
        this.title = title;
        this.customTitle = customTitle;
        this.review = review;
        this.creditName = creditName;
        this.creditIG = creditIG;
        this.creditTwitter = creditTwitter;
        this.imgLink = `${artist}-${title}.jpg`.split(" ").join("");
    }

    static async getSearch() {
        const sql = `
        SELECT 'video' AS type, title, artist, FROM videos
        UNION ALL
        SELECT 'album' AS type, title,  FROM albums
        UNION ALL
        SELECT 'single' AS type, title,  FROM singles
        ORDER BY like_count DESC
        LIMIT 10;
        `;
        return await pool.query(sql)
    }

    static async getHomeLatest(table) {
        const sql = `
        SELECT imgLink, customTitle, timeStamp, artist, title,
            CASE 
                WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 50), 1) IN (',', '!', '.') 
                    THEN CONCAT(SUBSTRING_INDEX(review, ' ', 49), '...')
                ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 50), '...')
            END AS review 
        FROM 
            ??
        ORDER BY 
            id DESC
        LIMIT 2;
        `;
        return await pool.query(sql, [table]);
    }

    static async getHomeTrending() {
        const sql = `
        SELECT table_name, likesCount, imgLink, artist, title
        FROM (
            SELECT 
                'Videos' AS table_name, likesCount, imgLink, artist, title, timeStamp
            FROM 
                videos
            UNION ALL
            SELECT 
                'Albums' AS table_name, likesCount, imgLink, artist, title, timeStamp
            FROM 
                albums
            UNION ALL
            SELECT 
                'Singles' AS table_name, likesCount, imgLink, artist, title, timeStamp
            FROM 
                singles
        ) AS combined_data
        ORDER BY YEAR(timeStamp) DESC, MONTH(timeStamp) DESC, likesCount DESC
        LIMIT 7;
        `;
        return await pool.query(sql)
    }

    static async getTableLatest(table) {
        const sql = `
        SELECT artist, title, imgLink FROM ??
        ORDER BY id DESC
        LIMIT 7;
        `;
        return await pool.query(sql, [table]);
    }

    static async getRecentArticles(table, offset) {
        const sql = `
        SELECT imgLink, artist, title, 
            CASE 
                WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 20), 1) IN (',', '!', '.') 
                    THEN CONCAT(SUBSTRING_INDEX(review, ' ', 19), '...')
                ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 20), '...')
            END AS review,
            color1, 
            color2, 
            color3,
            timeStamp,
            likesCount
        FROM ??
        ORDER BY 
            YEAR(timeStamp) DESC, MONTH(timeStamp) DESC, likesCount DESC
        LIMIT 32 OFFSET ?;
        `;
        return await pool.query(sql, [table, offset]);
    }

    static async getHomeFeatured() {
        const sql = `
        SELECT customTitle, title, artist, color1,
            CASE 
                WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 75), 1) IN (',', '!', '.') 
                    THEN CONCAT(SUBSTRING_INDEX(review, ' ', 74), '...')
                ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 75), '...')
            END AS review,
            imgLink, 
            timeStamp
        FROM 
            (
                SELECT customTitle, title, artist, review, imgLink, color1, timeStamp
                FROM singles
                WHERE isFeatured = 1

                UNION ALL

                SELECT customTitle, title, artist, review, imgLink, color1, timeStamp
                FROM albums
                WHERE isFeatured = 1

                UNION ALL

                SELECT customTitle, title, artist, review, imgLink, color1, timeStamp
                FROM videos
                WHERE isFeatured = 1
            ) AS combined_results
        ORDER BY 
            timeStamp DESC
        LIMIT 15;
        `;
        return await pool.query(sql);
    }

    static async getFeaturedByTable(table) {
        const sql = `
        SELECT customTitle, artist, title, imgLink,
            CONCAT(
                CASE 
                    WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 75), 1) IN (',', '!', '.') 
                        THEN CONCAT(SUBSTRING_INDEX(review, ' ', 74), '...')
                    ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 75), '...')
                END
            ) AS review, color1, color2, color3
        FROM ??
        WHERE isFeatured = 1
        ORDER BY timeStamp DESC
        LIMIT 7;
        `;
        return await pool.query(sql, [table]);
    }

    static async getArticle(table, artist, title) {
        const sql = `
            SELECT * FROM ??
            WHERE REPLACE(artist, ' ', '') = ?
            AND REPLACE(title, ' ', '') = ?;
        `;
        return await pool.query(sql, [table, artist, title]);
    }

}

export default Articles;