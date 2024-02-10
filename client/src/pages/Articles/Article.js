import useTableData3 from '../../hooks/useTableData3';
import useDataValues from '../../hooks/useDataValues';
import { getArticle } from '../../utils/getData';
import { useParams } from 'react-router-dom';
import "../../styles/articles.css"
import "../../styles/utils/shade.css"



const Article = ({ type }) => {
  const params = useParams();
  const { customTitle, timeStamp, review, imgLink, videoLink, spotifyLink, color1, color2, color3, creditName, creditTwitter, creditIG } = useDataValues(useTableData3(getArticle, type, params['*'])[0]);




  const background = `linear-gradient(-45deg, ${color1}20, ${color2}20, ${color3}20)`;
  return (
    <div className="Singles-FlexBox">
      <div className="Singles-Constraint" style={{ background: background }}>

        <time className="Singles-Date">{timeStamp}</time>
        <h3 className="Singles-Custom-Title">{customTitle}</h3>

        <figure>
          {type === "singles" || type === "albums" ? (
            <div className="Display-Container">
              <img src={imgLink} alt="" className="img-fitter2" />
              <div className='Shader4'></div>
            </div>
          ) : type === "videos" ? (
            <div className="Display-Container">
              <iframe title="Video-Link" src={videoLink} className="Iframe" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          ) : null}
        </figure>
        <div className="Singles-Credits-Container">
          <p className="Singles-Credit">{`By: ${creditName}`}</p>
          <p className="Singles-Credit">{`Twitter: ${creditTwitter}`}</p>
          <p className="Singles-Credit">{`Insta: ${creditIG}`}</p>
        </div>

        <p className="Singles-Summary">{review}</p>
        <p className="Singles-Summary">{review}</p>
        <p className="Singles-Summary">{review}</p>

        {type !== "Videos" ? (
          <iframe title="Music-Link" src={spotifyLink} className="Iframe" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        ) : null}

        {type === "albums" ? (
          <p />
        ) : null}

      </div>
    </div>
  )
}

export default Article