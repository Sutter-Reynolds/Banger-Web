import ArticlesRoute from "./articlesRoute.js";
import SongsController from "../../controllers/Articles/songsControllers.js";

const songsController = new SongsController()

class SongsRoute extends ArticlesRoute {
    constructor() {
        super(songsController);
    }

    SongsRoutes(){
        this.router
        .route("/")
        .post(songsController.createNewSong)
    }
}

const songsRoute = new SongsRoute();

export default songsRoute.router;