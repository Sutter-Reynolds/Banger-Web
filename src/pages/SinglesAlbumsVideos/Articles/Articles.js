import Article from "./Article";

const Articles = ({ dataArray, type }) => {
  return (
    <section className="Main-Singles-Albums-Videos">
      <div className="Main-Singles-Albums-Videos-Container">
        {dataArray.map((element, index) => (
          <Article key={index} data={element} type={type}/>
        ))}
      </div>
    </section>
  );
};

export default Articles;