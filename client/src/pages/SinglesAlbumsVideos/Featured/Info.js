

const Info = ({data}) => {
  return (
    <article className="Featured-Singles-Albums-Videos-Currnet">
        <div className="Featured-Singles-Albums-Videos-Currnet-Title">
            <h3>{data.customTitle}</h3>
            <h4>{`${data.artist} - ${data.title}`}</h4>
        </div>
        <p className="Featured-Singles-Albums-Videos-Currnet-Summary">{data.review}</p>
    </article>
  )
}

export default Info