import useTableData3 from '../../hooks/useTableData';
import useDataValues from '../../hooks/useDataValues';
import { getArticle } from '../../utils/getData';
import useAlbumsSongs from '../../hooks/useAlbumsSongs';
import { useParams } from 'react-router-dom';
import "../../styles/articles.css"
import "../../styles/utils/shade.css"



const Article = ({ type }) => {
  const params = useParams();
  const { artist, title, customTitle, timeStamp, review, imgLink, videoLink, spotifyLink, color1, creditName, creditTwitter, creditIG, id } = useDataValues(useTableData3(getArticle, type, params['*'])[0]);
  const Songs = useAlbumsSongs(id);


  return (
    <div className="Articles-FlexBox">
      <div className="Articles-Background-Cover">
        <div className="Articles-Constraint" style={{ background: `${color1}60` }}>

          <time className="Articles-Date" >{timeStamp}</time>

          <figure>
            <div className="Display-Container">
              {type === "singles" || type === "albums" ? (
                <>
                  <img className="img-fitter" src={imgLink} alt="" />
                  <div className="Shader3" />
                  <div className="Artcle-background-Cover" style={{ backgroundColor: `${color1}25` }}>
                    <div className="Article-Info-Container">
                      <h3>{customTitle}</h3>
                      <h4>{`${artist} - ${title}`}</h4>
                    </div>
                  </div>
                </>
              ) : type === "videos" ? (
                <iframe title="Video-Link" src={videoLink} className="Iframe" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              ) : null}
            </div>
          </figure>
          <div className="Articles-Credits-Container">
            <p className="Articles-Credit">{`By: ${creditName}`}</p>
            <p className="Articles-Credit">{`Twitter: ${creditTwitter}`}</p>
            <p className="Articles-Credit">{`Insta: ${creditIG}`}</p>
          </div>
          <div className="Articles-Summary-Container">
            <h5 className="Articles-Header">Review:</h5>
            <p className="Articles-Review">{review}<br /><br /><br />{review}<br /><br /><br />{review}</p>
            <div className="Articles-Link-Gap" />
            {type !== "Videos" && (
              <iframe title="Music-Link" src={spotifyLink} className="Iframe" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            )}
          </div>

          {type === "albums" && Songs.map(element => (
            <div className="Articles-Summary-Container">
              <h6 className="Articles-Header">{`${element.title}:`}</h6>
              <p className="Articles-Review">{element.review}</p>
              <div className="Articles-Link-Gap" />
              <iframe title="Music-Link" src={element.spotifyLink} className="Iframe" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Article