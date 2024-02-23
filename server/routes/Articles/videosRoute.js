import ArticlesRoute from "./articlesRoute.js";
import VideosController from "../../controllers/Articles/videosControllers.js";

const videosController = new VideosController()

class VideosRoute extends ArticlesRoute {
    constructor() {
        super(videosController);
        this.VideosRoutes();
    }

    VideosRoutes(){
        this.router
        .route("/")
        .post(videosController.createNewVideo)
    }
}

const videosRoute = new VideosRoute();

export default videosRoute.router;