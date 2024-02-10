import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import singlesRoute from "./routes/Articles/singlesRoute.js";
import videosRoute from "./routes/Articles/videosRoute.js";
import albumsRoute from './routes/Articles/albumsRoute.js';
import songsRoute from './routes/Articles/songsRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/singles", singlesRoute);
app.use("/videos", videosRoute);
app.use("/albums", albumsRoute);
app.use("/songs", songsRoute);

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went really wrong"
    });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))