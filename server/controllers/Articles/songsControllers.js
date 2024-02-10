import ArticlesController from './articlesControllers.js';
import Songs from '../../models/Articles/songs.js';

class SongsController extends ArticlesController {
    constructor() {
        super(Songs, "songs");
    }

    createNewSong = async (req, res, next) => {
        try {
            const { title, review, spotifyLink, albumArtist, albumTitle } = req.body;

            const song = new Songs(title, review, spotifyLink, albumArtist, albumTitle);

            await song.save();

            console.log("Core Information:", song);
            res.status(201).json({ message: "Post Created" });

        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

export default SongsController;
