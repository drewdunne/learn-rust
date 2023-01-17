import React, {useState} from 'react'
import Navbar from '../client/components/layouts/Navbar'
import Section from '../client/components/sections/Section'
import logo from '../client/assets/images/logo.png'
import NavbarMenu from '../client/components/elements/NavbarMenu'
import NavbarItem from '../client/components/elements/NavbarItem'
import SkillTree from '../client/components/elements/SkillTree'
import RadioButtonGroup from '../client/components/elements/RadioButtonGroup'
import RadioButtonGroupVertical from '../client/components/elements/RadioButtonGroupVertical'
import * as skillData from '../client/data/skillTreeData.json'

const localStorage = JSON.parse(window.localStorage.getItem('tldr-rust-progress-data'));

const Home = () => {

  const [category, setCategory] = useState('Core');
  const [navigationSelection, setNavigationSelection] = useState('Getting Started');
  const [level, setLevel] = useState(0);

  const navigationOptions = []
  const options = Object.values(skillData);
  for (let i = 0; i < options.length; i++) {
    navigationOptions.push(Object.keys(options[i]));
  }

  const currentTreeData = skillData[category][navigationSelection][level];
  const progressData = localStorage ? localStorage : {};

  function handleClickNode(nodeId) {
    progressData[nodeId] =  progressData[nodeId] ? false : true;
    window.localStorage.setItem('tldr-rust-progress-data', JSON.stringify(progressData)) 
  }

  function handleClickNavigation(name, title) {
    setNavigationSelection(name);
    setCategory(title);
  }

  return (
    <div className="home">
      <Navbar className='is-fixed-top top-nav'>
        <NavbarItem src={logo} 
          alt="tldr-rust-logo" 
          className="logo" 
          text="TLDR Guide: Rust">
        </NavbarItem>
        <RadioButtonGroup 
          category={navigationSelection} 
          setDifficultyHandler={setLevel} 
          difficulty={level}>
        </RadioButtonGroup>
        <NavbarMenu className={"navbar-end"}>
          <NavbarItem text="Source" 
          href="https://github.com/drewdunne/learn-rust">
          </NavbarItem>
         {level}
        </NavbarMenu>
      </Navbar>

      <Navbar className="left-nav">
        <RadioButtonGroupVertical
          entries={navigationOptions.slice(0, -1)}
          titles={navigationOptions[navigationOptions.length-1]}
          setNavigationHandler={handleClickNavigation} 
          >

        </RadioButtonGroupVertical>
      </Navbar>

      <Section key="skill-tree-section" className="skill-tree">
        <SkillTree data={currentTreeData} 
        progressData={progressData} 
        category={navigationSelection} 
        difficulty={level} 
        handleClickNode={handleClickNode} 
        />
      </Section>

     </div>
  )
}

export default Home