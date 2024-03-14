import { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import useDataValues from '../../hooks/useDataValues';

const SearchArticles = forwardRef(({ data, table }, ref) => {
    const [articleSongLink, setArticleSongLink] = useState("");
    const { artist, title, albumsTitle, customTitle, review, imgLink, articleLink } = useDataValues(data);

    useEffect(() => {
        if (table !== "Songs") {
            setArticleSongLink(articleLink);
        } else {
            setArticleSongLink(`${artist}-${albumsTitle}`.split(" ").join(""));
        }
    }, [table, artist, albumsTitle, articleLink]);

    const articleSongTable = table !== "Songs" ? table : "Albums";

    return (
        <div className="Search-Articles-Container" ref={ref}>
            <Link className="Search-Article No-Decoration" to={`${articleSongTable}/Articles/${articleSongLink}`} >
                <div className="Image-Container-2">
                    <img src={imgLink} alt="" className="img-fitter2" />
                </div>
                <div>
                    <h4 className="Search-Article-info">{`${artist} - ${title}`}</h4>
                    {albumsTitle && <h4 className="Search-Article-Album-Title">{`${albumsTitle}`}</h4>}
                </div>
                <div className="Search-Article-Main-Info">
                    <h3>{customTitle}</h3>
                    <p>{review}</p>
                </div>
            </Link>
        </div>
    );
});

export default SearchArticles;