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

    static async findAll(table) {
        const sql = `SELECT * FROM ??;`;
        return await pool.query(sql, [table]);
    }

    static async getHomeLatest(table) {
        const sql = `
        SELECT 
            imgLink, 
            customTitle, 
            timeStamp, 
            artist, 
            title, 
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

    static async getHomeTrending(){
        const sql = `
        SELECT 
            'Videos' AS table_name,
            likesCount, 
            imgLink, 
            artist, 
            title
        FROM videos
        WHERE timeStamp >= NOW() - INTERVAL 1 MONTH

        UNION ALL

        SELECT 
            'Albums' AS table_name,
            likesCount, 
            imgLink, 
            artist, 
            title
        FROM albums
        WHERE timeStamp >= NOW() - INTERVAL 1 MONTH

        UNION ALL

        SELECT 
            'Singles' AS table_name,
            likesCount, 
            imgLink, 
            artist, 
            title
        FROM singles
        WHERE timeStamp >= NOW() - INTERVAL 1 MONTH

        ORDER BY likesCount DESC
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

    static async getLatestArticles(table, offsetNum){
        const currentMonth = new Date().getMonth() + 1;
        const currentYear = new Date().getFullYear();

        const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;
        const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;

        const sql = `
        SELECT 
            imgLink, 
            artist, 
            title, 
            CASE 
                WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 20), 1) IN (',', '!', '.') 
                    THEN CONCAT(SUBSTRING_INDEX(review, ' ', 19), '...')
                ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 20), '...')
            END AS review,
            color1, 
            color2, 
            color3
        FROM 
            ??
        WHERE 
            (MONTH(timeStamp) = ? AND YEAR(timeStamp) = ?)
            OR (MONTH(timeStamp) = ? AND YEAR(timeStamp) = ?)
        ORDER BY 
            MONTH(timeStamp) DESC, likesCount DESC
        LIMIT 16 OFFSET ?;
        `;
        return await pool.query(sql, [table, currentMonth, currentYear, previousMonth, previousYear, offsetNum]);
    }

    static async getHomeFeatured(){
        const sql = `
        SELECT 
            customTitle, 
            title, 
            artist, 
            CASE 
                WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 75), 1) IN (',', '!', '.') 
                    THEN CONCAT(SUBSTRING_INDEX(review, ' ', 74), '...')
                ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 75), '...')
            END AS review,
            imgLink, 
            timeStamp
        FROM 
            (
                SELECT customTitle, title, artist, review, imgLink, timeStamp
                FROM singles
                WHERE isFeatured = 1

                UNION ALL

                SELECT customTitle, title, artist, review, imgLink, timeStamp
                FROM albums
                WHERE isFeatured = 1

                UNION ALL

                SELECT customTitle, title, artist, review, imgLink, timeStamp
                FROM videos
                WHERE isFeatured = 1
            ) AS combined_results
        ORDER BY 
            timeStamp DESC
        LIMIT 15;
        `;
        return await pool.query(sql);
    }

    static async getFeaturedByTable(table){
        const sql = `
        SELECT 
            customTitle, 
            artist, 
            title, 
            imgLink,
            CONCAT(
                CASE 
                    WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 75), 1) IN (',', '!', '.') 
                        THEN CONCAT(SUBSTRING_INDEX(review, ' ', 74), '...')
                    ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 75), '...')
                END
            ) AS review,
            color1, 
            color2, 
            color3
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