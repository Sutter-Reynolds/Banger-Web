import ArticlesController from './articlesControllers.js';
import Albums from '../../models/Articles/albums.js';

class AlbumsController extends ArticlesController {
    constructor() {
        super(Albums, "albums");
    }

    createNewAlbum = async (req, res, next) => {
        try {
            const { artist, title, customTitle, review, spotifyLink, creditName, creditTwitter, creditIG } = req.body;

            const album = new Albums(artist, title, customTitle, review, spotifyLink, creditName, creditTwitter, creditIG);

            await album.save();

            console.log("Core Information:", album);
            res.status(201).json({ message: "Post Created" });

        } catch (err) {
            console.log(err);
            next(err);
        }
    }

}

export default AlbumsController;