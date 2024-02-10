import Article from "./Article"


const Latest = ({dataArray, type}) => {
  return (
    <section className="Latests-Singles-Albums-Videos">
        <h2 className="Latests-Singles-Albums-Videos-Title">{`Latest ${type}`}</h2>
            <div className="Brightener">
                <div className="Latests-Singles-Albums-Videos-Container">
                    <Article data={dataArray[0]} type={type}/>
                    <Article data={dataArray[1]} type={type}/>
                    <Article data={dataArray[2]} type={type}/>
                    <Article data={dataArray[3]} type={type}/>
                    <Article data={dataArray[4]} type={type}/>
                    <Article data={dataArray[5]} type={type}/>
                    <Article data={dataArray[6]} type={type}/>
                </div>
            </div>
    </section>
  )
}

export default Latest