import React, {useEffect} from "react"
import './navbar.sass';
import FirstSectionComponent from "../firstSection/FirstSectionComponent";
import chooseTopic from '../../assets/img/chooseTopic.svg';
import findHelper from '../../assets/img/findHelper.svg';
import joinTheForum from '../../assets/img/joinTheForum.svg';
import SecondSection from "../secondSection";
import PersonList from "../../data/personList";
import Hero from "./Hero";



const Home = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    setData(PersonList);
  });
  return (
    <>
      <div className='hero'>
          <Hero />
      </div>
        <section className='firstSection'>
          <FirstSectionComponent
              image={chooseTopic} alt='chooseTopic'
              title='Choose a topic'
              text='Choose a topic you are interested in and we will find the best articles for you'
          />
        <FirstSectionComponent
            image={findHelper} alt='findHelper'
            title='Find your helper'
            text='Find your helper and start learning'
        />
        <FirstSectionComponent
            image={joinTheForum} alt='joinTheForum'
            title='Join the forum'
            text='Join the forum and start learning'
        />
        </section>
          <SecondSection
                image='https://i.pravatar.cc/20'
                title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
                rating='4.5'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
          />
        <section className='secondSection'>
          {data.map((person) => {
            return (
                <SecondSection
                    key={person.id}
                    image={person.image}
                    title={person.name}
                    rating={person.rating}
                    description={person.description}
                />)
            })}
        </section>
    </>
  )
}
export default Home;
