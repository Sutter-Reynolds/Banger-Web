import express from 'express';

class ArticlesRoute {
    constructor(article){
        this.article = article
        this.router = express.Router();
        this.setupRoutes()
    }

    setupRoutes(){

        this.router 
            .route("/search")
            .get(this.article.getSearch)

        this.router
            .route("/home-featured")
            .get(this.article.getHomeFeatured)

        this.router
            .route("/home-trending")
            .get(this.article.getHomeTrending)

        this.router
            .route("/home-latest")
            .get(this.article.getHomeLatest)

        this.router
            .route("/featured-articles")
            .get(this.article.getFeaturedByTable)

        this.router
            .route("/latest-articles")
            .get(this.article.getTableLatest)

        this.router
            .route("/recent-articles")
            .get(this.article.getRecentArticles)

        this.router
            .route("/article/:artistTitle")
            .get(this.article.getArticle) 
        
        

    }
}

export default ArticlesRoute;