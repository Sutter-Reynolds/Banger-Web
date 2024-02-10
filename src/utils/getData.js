import api from "./api.js";


const getHomeLatest = async (table) => {
    try{
        const response = await api.get(`/${table}/home-latest`);
        return(response.data.article);
    }catch (err) {
        console.log(err);
    }
}

const getHomeTrending = async () => {
    try{
        const response = await api.get(`/singles/home-trending`);
        return(response.data.article);
    }catch (err) {
        console.log(err);
    }
}

const getLatestTable = async (table) => {
    try{
        const response = await api.get(`/${table}/latest-articles`);
        return(response.data.article);
    }catch (err) {
        console.log(err);
    }
}

const getTotalArticles = async (table) => {
    try{
        const response = await api.get(`/${table}/latest-articles`);
        return(response.data.article);
    }catch (err) {
        console.log(err);
    }
}

const getLatestWithOffeset = async (table, page) => {
    try{
        const response = await api.get(`/${table}/latest-articles/${page}`);
        return(response.data.article);
    }catch (err) {
        console.log(err);
    }
}

const getHomeFeatured = async () => {
    try{
        const response = await api.get(`/singles/home-featured`);
        return(response.data.article);
    }catch (err) {
        console.log(err);
    }
}

const getTableFeatured = async (table) => {
    try{
        const response = await api.get(`/${table}/featured`);
        return(response.data.article);
    }catch (err) {
        console.log(err);
    }
}

const getArticle = async (table, artistTitle) => {
    try{
        const response = await api.get(`/${table}/article/${artistTitle}`);
        return(response.data.article);
    }catch (err) {
        console.log(err);
    }
}

export { getHomeLatest, getHomeTrending, getLatestTable, getTotalArticles, getLatestWithOffeset, getHomeFeatured, getTableFeatured, getArticle } ;
