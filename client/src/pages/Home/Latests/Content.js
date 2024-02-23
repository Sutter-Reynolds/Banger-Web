import LatestsContentArticle from "./ContentArticle"
import { Link } from 'react-router-dom';
import scrollToTop from "../../../utils/scrollToTop";

const Content = ({title, dataArray}) => {
  return (
    <section className="Latests-Content">
        <h2>{"Latest " + title}</h2>
        <LatestsContentArticle data={dataArray[0]} type={title}/>
        <LatestsContentArticle data={dataArray[1]} type={title}/>
        <div className="Latests-Content-Link-Container"><Link to ={"/" + title} onClick={scrollToTop} replace={true}>More {title} &#x3e;&#x3e;&#x3e;</Link></div>
    </section>
  )
}

export default Content