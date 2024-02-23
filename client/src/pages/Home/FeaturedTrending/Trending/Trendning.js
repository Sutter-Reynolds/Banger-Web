import useWindowSize from '../../../../hooks/useWindowSize';
import TrendingArticle from './Article';

const Trending = ({ dataArray }) => {
  const windowWidth = useWindowSize();
  return (
    <>
      {windowWidth <= 1024 ? (
        <div className="Trending-Outlining">
          <section className="Trending-Container">
            <h2>Trending Now</h2>
            <TrendingArticle data={dataArray[0]} num="1"/>
            <TrendingArticle data={dataArray[1]} num="2"/>
            <TrendingArticle data={dataArray[2]} num="3"/>
            <TrendingArticle data={dataArray[3]} num="4"/>
            <TrendingArticle data={dataArray[4]} num="5"/>
          </section>
        </div>
      ) : (
        <>
          <section className="Trending-Container">
            <h2>Trending Now</h2>
            <TrendingArticle data={dataArray[0]} num="1" />
            <TrendingArticle data={dataArray[1]} num="2" />
            <TrendingArticle data={dataArray[2]} num="3" />
            <TrendingArticle data={dataArray[3]} num="4" />
            <TrendingArticle data={dataArray[4]} num="5" />
            <TrendingArticle data={dataArray[5]} num="6" />
            <TrendingArticle data={dataArray[6]} num="7" />
          </section>
        </>
      )}
    </>
  );
};

export default Trending;