import api from "./api.js";

const getHomeFeatured = async () => {
    try {
        const response = await api.get(`/singles/home-featured`);
        return (response.data.article);
    } catch (err) {
        console.log(err);
    }
}

const getHomeLatest = async (table) => {
    try {
        const response = await api.get(`/${table}/home-latest`);
        return (response.data.article);
    } catch (err) {
        console.log(err);
    }
}

const getHomeTrending = async () => {
    try {
        const response = await api.get(`/singles/home-trending`);
        return (response.data.article);
    } catch (err) {
        console.log(err);
    }
}

const getTableFeatured = async (table) => {
    try {
        const response = await api.get(`/${table}/featured-articles`);
        return (response.data.article);
    } catch (err) {
        console.log(err);
    }
}

const getLatestTable = async (table) => {
    try {
        const response = await api.get(`/${table}/latest-articles`);
        return (response.data.article);
    } catch (err) {
        console.log(err);
    }
}

const getRecentWithPage = async (table, page) => {
    try {
        const response = await api.get(`/${table}/recent-articles?page=${page}`);
        return (response.data);
    } catch (err) {
        console.log(err);
    }
}

const getArticle = async (table, artistTitle) => {
    try {
        const response = await api.get(`/${table}/article/${artistTitle}`);
        return (response.data.article);
    } catch (err) {
        console.log(err);
    }
}

const getSongByAlbumId = async (albumId) => {
    try {
        const response = await api.get(`/songs/albums-songs/${albumId}`);
        return (response.data.songs);
    } catch (err) {
        console.log(err);
    }
}

export { getHomeLatest, getHomeTrending, getLatestTable, getRecentWithPage, getHomeFeatured, getTableFeatured, getArticle, getSongByAlbumId };
