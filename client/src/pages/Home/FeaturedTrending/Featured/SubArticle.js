

import React from 'react';

const SubArticle = ({ data, isActive, handleClick, num }) => {
  return (
    <article className="Featured-Sub-Article" onClick={() => handleClick(num)}>
      <div className="Featured-Sub-Article-Container">
        <figure className="Image-Container">
          <img className="img-fitter" src={data.imgLink} alt="" />
          <div className="Feature-Aritsits-Shader1" id={ isActive ? "No-BackdropFilter" : "" }/>
          <div className="Feature-Aritsits-Info-Container">
            <div className="Feature-Aritsits-Info-Shader1" />
            <div className="Feature-Aritsits-Info-Shader2" />
            <div className="Feature-Aritsits-Info-Shader1" />
            <div className="Feature-Aritsits-Info-CircleShader" />
          </div>
        </figure>
      </div>
      <h4 id={ isActive? "BrightenText" : ""}>{`${data.artist}`}</h4>
      <h3 id={ isActive? "BrightenText" : ""}>{data.customTitle}</h3>
    </article>
  );
};

export default SubArticle;