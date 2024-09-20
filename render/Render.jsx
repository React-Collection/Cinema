import HeroSectionComponent from "../components/heroSectionComponent/HeroSectionComponent";
import Headercomponent from "../components/HeaderComponent/Headercomponent.jsx";
import FooterComponent from "../components/footerComponent/FooterComponent";
import CardComponent from "../components/cardComponent/CardComponent";

function Render() {
  return (
    <div>
      <Headercomponent />
      <HeroSectionComponent />
      <CardComponent
        rtl={true}
        title="Scary Cinema"
        description="To sort the list, we’re using our recommendation formula, which calculates a movie’s rating AND its Audience Score, along with the film’s number of reviews and year of release. And how did we pick what to initially throw into our bubbling recommendation cauldron? We hand-picked only Certified Fresh movies with a positive Audience Score, with recent movies needing at least 100 critics reviews. What’s recent? Anything after 2016, which is when we expanded our critics pool and criteria."
      />
      <CardComponent
        rtl={false}
        title="3D Cinema"
        description="i am not a big fan of horror gore which is explicit and gratuitous and actually am into a good scare...so this is just a random list of scary movies in my opinion and sorry it is not going to be a long list as there are not a lot of scary horror movies out there.
      wow...the list has grown big time. i challenge anybody to put up a better and extensive list of top horror movies. every movie on this list is rated 5 star or better on imdb...heres all the good ones...enjoy...plz leave a like or comment."
      />
      <FooterComponent />
    </div>
  );
}
export default Render;
