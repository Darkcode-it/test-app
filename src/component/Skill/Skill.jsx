import React from 'react';
import styles from './Skill.css'
import  data from '../Data.json'



export default function Skill() {
    return (
        <div className="container">
            <div className="skill">
                {data.data.map((data) => (
                    <div className="singleSkill" key={data.id}>
                        <img src={`${data.logo}`} className="image"/>
                        <h4>{data.title}</h4>
                    </div>
                ))}
            </div>

        </div>
    );
}
