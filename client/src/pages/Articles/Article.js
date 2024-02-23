import useTableData3 from '../../hooks/useTableData3';
import useDataValues from '../../hooks/useDataValues';
import { getArticle } from '../../utils/getData';
import { useParams } from 'react-router-dom';
import "../../styles/articles.css"
import "../../styles/utils/shade.css"



const Article = ({ type }) => {
  const params = useParams();
  const { customTitle, timeStamp, review, imgLink, videoLink, spotifyLink, color1, creditName, creditTwitter, creditIG } = useDataValues(useTableData3(getArticle, type, params['*'])[0]);

  return (
    <div className="Articles-FlexBox">
      <div className="Articles-Background-Cover">
        <div className="Articles-Constraint" style={{ background:  `${color1}50`}}>

        <time className="Articles-Date" >{timeStamp}</time>
        <h3 className="Articles-Custom-Title">{customTitle}</h3>

        <figure>
          <div className="Display-Container">
          {type === "singles" || type === "albums" ? (
            <>
              <img src={imgLink} alt="" className="img-fitter2"/>
              <div className='Shader4'></div>
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
        
        <h5 className="Articles-Header">Review:</h5>
        <p className="Articles-Summary">{review}</p>
        <p className="Articles-Summary">{review}</p>
        <p className="Articles-Summary">{review}</p>

        {type !== "Videos" ? (
          <iframe title="Music-Link" src={spotifyLink} className="Iframe" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        ) : null}

        {type === "albums" ? (
          <p />
        ) : null}

        </div>
      </div>
    </div>
  )
}

export default Article