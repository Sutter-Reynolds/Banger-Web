import ArticlesRoute from "./articlesRoute.js";
import AlbumsController from "../../controllers/Articles/albumsControllers.js";

const albumsController = new AlbumsController()

class AlbumsRoute extends ArticlesRoute {
    constructor() {
        super(albumsController);
    }

    AlbumsRoutes(){
        this.router
        .route("/")
        .post(albumsController.createNewAlbum)

    }
}

const albumsRoute = new AlbumsRoute();

export default albumsRoute.router;