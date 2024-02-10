import ArticlesController from './articlesControllers.js';
import Singles from '../../models/Articles/singles.js';

class SinglesController extends ArticlesController {
    constructor() {
        super(Singles, "singles");
    }

    createNewSingle = async (req, res, next) => {
        try {
            const { artist, title, customTitle, review, videoLink, spotifyLink, creditName, creditTwitter, creditIG } = req.body;

            const single = new Singles(artist, title, customTitle, review, videoLink, spotifyLink, creditName, creditTwitter, creditIG);

            await single.save();

            console.log("Core Information:", single);
            res.status(201).json({ message: "Post Created" });

        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}


export default SinglesController;