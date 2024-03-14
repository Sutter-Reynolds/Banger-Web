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

    static async getSearch(search) {
        const sql = `
        SELECT artist, title, table_name, albumsTitle, review, customTitle, imgLink
        FROM (
            SELECT *,
            (SELECT SUM(exact_match_count) FROM (
                SELECT COUNT(DISTINCT word) AS exact_match_count
                FROM (
                    SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(?, ' ', n.digit+1), ' ', -1) as word
                    FROM
                    (SELECT 0 as digit UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3) as n
                    WHERE SUBSTRING_INDEX(SUBSTRING_INDEX(?, ' ', n.digit+1), ' ', -1) <> ''
                ) AS search_words
                WHERE UPPER(artist) LIKE CONCAT('%', UPPER(search_words.word), '%')
                    OR UPPER(title) LIKE CONCAT('%', UPPER(search_words.word), '%')
                    OR UPPER(artistTitle) LIKE CONCAT('%', UPPER(search_words.word), '%')
                ) AS exact_match) AS exact_match
        FROM (
            SELECT artist, title, likesCount, 'Videos' AS table_name, customTitle, imgLink,
                CASE 
                    WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 50), 1) IN (',', '!', '.') 
                        THEN CONCAT(SUBSTRING_INDEX(review, ' ', 49), '...')
                    ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 50), '...')
                END AS review,
                CONCAT(artist, ' ', title) AS artistTitle,
                NULL AS albumsTitle
            FROM videos
            UNION ALL
            SELECT artist, title, likesCount, 'Singles' AS table_name, customTitle, imgLink,
                CASE 
                    WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 50), 1) IN (',', '!', '.') 
                        THEN CONCAT(SUBSTRING_INDEX(review, ' ', 49), '...')
                    ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 50), '...')
                END AS review,
                CONCAT(artist, ' ', title) AS artistTitle,
                NULL AS albumsTitle
            FROM singles
            UNION ALL
            SELECT artist, title, likesCount, 'Albums' AS table_name, customTitle, imgLink,
                CASE 
                    WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 50), 1) IN (',', '!', '.') 
                        THEN CONCAT(SUBSTRING_INDEX(review, ' ', 49), '...')
                    ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 50), '...')
                END AS review,
                CONCAT(artist, ' ', title) AS artistTitle,
                NULL AS albumsTitle
            FROM albums
            UNION ALL
            SELECT a.artist, s.title, -1, 'Songs' AS  table_name, a.customTitle, a.imgLink, s.review,
                CONCAT(a.artist, ' ', a.title, ' ', s.title) AS artistTitle,
                a.title
            FROM (
                SELECT NULL AS artist, title, NULL AS likesCount,
                    CASE 
                        WHEN RIGHT(SUBSTRING_INDEX(review, ' ', 50), 1) IN (',', '!', '.') 
                            THEN CONCAT(SUBSTRING_INDEX(review, ' ', 49), '...')
                        ELSE CONCAT(SUBSTRING_INDEX(review, ' ', 50), '...')
                    END AS review,
                    title AS artistTitle, albumsId
                FROM songs
            ) AS s
            LEFT JOIN albums a ON s.albumsId = a.Id
        ) AS all_media
        ) AS matches
        WHERE exact_match >= 1
        ORDER BY exact_match DESC
        LIMIT 5;
        `;
        return await pool.query(sql, [search, search, search, search, search, search])
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