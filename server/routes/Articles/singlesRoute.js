import ArticlesRoute from "./articlesRoute.js";
import SinglesController from "../../controllers/Articles/singlesControllers.js";

const singelescontroller = new SinglesController()

class SinglesRoute extends ArticlesRoute {
    constructor() {
        super(singelescontroller);
    }

    SinglesRoutes(){
        this.router
        .route("/")
        .post(singelescontroller.createNewSingle)
    }
}

const singlesRoute = new SinglesRoute();

export default singlesRoute.router;