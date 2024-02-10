//Components
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home  from "./pages/Home/Home";
import Article from "./pages/Articles/Article";
import SinglesAlbumsVideos from "./pages/SinglesAlbumsVideos/SinglesAlbumsVideos";
import useNavbarScroll from "./hooks/useNavbarScroll";



//Hooks
import useMoto from "./hooks/useMoto"

//Style Sheets
import "./styles/utils/clear.css"

const App = () => {
    return (
        <>
        <Header quote={useMoto()}/>
        <Navbar/>
            <main className={`${useNavbarScroll() ? "Main-Margin" : ""}`}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Singles" element={<SinglesAlbumsVideos table="Singles"/>}></Route>
                    <Route path="/Albums" element={<SinglesAlbumsVideos table="Albums"/>}/>
                    <Route path="/Videos" element={<SinglesAlbumsVideos table="Videos"/>}/>
                    <Route path="/Trending" element=""/>
                    <Route path="/Interviews" element=""/>
                    <Route path="/Singles/Articles/*" element={<Article type="singles"/>}/>
                    <Route path="/Albums/Articles/*" element={<Article type="albums"/>}/>
                    <Route path="/Videos/Articles/*" element={<Article type="videos"/>}/>
                </Routes>
            </main>
        <Footer/>
        </>
    )
}

export default App