import { useState } from 'react';
import Article from './Article';
import CDImage from './CDImage';
import useDataValues from '../../../hooks/useDataValues';

const Featured = ({ dataArray, type }) => {
  const [currentArticle, setCurrentArticle] = useState(0);
  const currentData = useDataValues(dataArray[currentArticle]);

  const background = `linear-gradient(-45deg, ${currentData.color1}25, ${currentData.color2}25, ${currentData.color3}25)`;

  return (
    <section className="Featured-Singles-Albums-Videos">
      <div className="Featured-Singles-Albums-Videos-Container" style={{ backgroundImage: background }}>
        <div className="Featured-Singles-Albums-Videos-Constraint">
          <Article setCurrentArticle={setCurrentArticle} data={currentData} />
          <CDImage type={type} data={currentData} />
        </div>
      </div>
    </section>
  );
};

export default Featured;