import PageLinks from "./PageLinks";

const Pages = () => {
  return (
    <ul className="Page-Links-Container">
        <PageLinks link="/" name="Home"/>
        <PageLinks link="/Singles" name="Singles"/>
        <PageLinks link="/Albums" name="Albums/EPs"/>
        <PageLinks link="/Videos" name="Videos"/>
        <PageLinks link="/Trending" name="Trending"/>
        <PageLinks link="/Interviews" name="Interviews"/>
    </ul>
  )
}

export default Pages