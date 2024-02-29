import ArticlesRoute from "./articlesRoute.js";
import SongsController from "../../controllers/Articles/songsControllers.js";

const songsController = new SongsController()

class SongsRoute extends ArticlesRoute {
    constructor() {
        super(songsController);
        this.SongsRoutes();
    }

    SongsRoutes(){
        this.router
        .route("/")
        .post(songsController.createNewSong)

        this.router
        .route("/albums-songs/:id")
        .get(songsController.getSongByAlbumId)
    }
}

const songsRoute = new SongsRoute();

export default songsRoute.router;