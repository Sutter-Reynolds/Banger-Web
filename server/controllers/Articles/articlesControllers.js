const OFFSET = 16;

class ArticlesController {
    constructor(model, tableName) {
        this.model = model;
        this.tableName = tableName;
    }

    getSearch = async (req, res, next) => {
        try {
            const [article, _] = await this.model.getSearch();
            res.status(200).json({ article });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    getHomeLatest = async (req, res, next) => {
        try {
            const [article, _] = await this.model.getHomeLatest(this.tableName);
            res.status(200).json({ article });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    getHomeTrending = async (req, res, next) => {
        try {
            const [article, _] = await this.model.getHomeTrending();
            res.status(200).json({ article });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    getTableLatest = async (req, res, next) => {
        try {
            const [article, _] = await this.model.getTableLatest(this.tableName);
            res.status(200).json({ article });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    getRecentArticles = async (req, res, next) => {
        try {
            const recentNum = parseInt(req.query.page)
            const offset = OFFSET * recentNum;
            const [article, _] = await this.model.getRecentArticles(this.tableName, offset);
            const current = article.slice(0, OFFSET);
            const next = article.slice(OFFSET);
            res.status(200).json({ current, next });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    getHomeFeatured = async (req, res, next) => {
        try {
            const [article, _] = await this.model.getHomeFeatured();
            res.status(200).json({ article });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    getFeaturedByTable = async (req, res, next) => {
        try {
            const [article, _] = await this.model.getFeaturedByTable(this.tableName);
            res.status(200).json({ article });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    getArticle = async (req, res, next) => {
        try {
            const info = req.params.artistTitle;
            const parts = info.split('-');
            const artist = parts[0].trim();
            const title = parts[1].trim();
            const [article, _] = await this.model.getArticle(this.tableName, artist, title);
            res.status(200).json({ article });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

}

export default ArticlesController;