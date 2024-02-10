import ArticlesController from './articlesControllers.js';
import Videos from '../../models/Articles/videos.js';

class VideosController extends ArticlesController {
    constructor() {
        super(Videos, "videos");
    }

    createNewVideo = async (req, res, next) => {
        try {
            const { artist, title, customTitle, review, videoLink, creditName, creditIG, creditTwitter } = req.body;

            const video = new Videos(artist, title, customTitle, review, videoLink, creditName, creditIG, creditTwitter);

            await video.save();
            console.log("Core Information:", video);
            res.status(201).json({ message: "Post Created" });

        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

export default VideosController;