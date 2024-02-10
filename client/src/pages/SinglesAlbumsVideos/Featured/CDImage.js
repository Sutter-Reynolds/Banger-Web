import React from 'react'

const CDImage = ({type, data}) => {
  return (
    <div className="Featured-Singles-Albums-Videos-Display">
        <h2 className="Featured-Singles-Albums-Videos-Info-Title">{`Featured ${type}`}</h2>
        <div className="Featured-Singles-Albums-Videos-Display-Container">  
            <figure className="img-fitter4"><img src={data.imgLink} alt="" className="img-fitter2 img-circular"/></figure>
            <div className="Display-Circle-Lining"></div>
            <div className="Display-Circle"></div>
            <div className="Display-Circle2"></div>
            <div className="Display-Cover">
            </div>
        </div>
    </div>
  )
}

export default CDImage