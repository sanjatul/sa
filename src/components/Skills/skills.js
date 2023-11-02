import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills=()=>{
    return(
        <section id="skills">
            <span className="skillTitle">What I do?</span>
            <span className="skillDesc">I am hi how are you? This is a dummy text. I am hi how are you? This is a dummy text. I am hi how are you? This is a dummy text. I am hi how are you? This is a dummy text.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} className="skillBarImg" alt="UI Design"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} className="skillBarImg" alt="Web Design"/>
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} className="skillBarImg" alt="App Design"/>
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>This is a demo text, you can write your own content here</p>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Skills;