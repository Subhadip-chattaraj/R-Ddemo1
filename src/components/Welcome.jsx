import React from 'react';
import '../Styling/Welcome.css';
import Announcements from './Announcements'

import innovationImg from '../images/innovation.avif'; // or use /images/innovation.avif if it's in public

const Welcome = () => {
    return (
        <div>
            <Announcements/>
            <section className="overview">
                <div className="overview-container">
                    <div className="overview-text">
                        <h2>Overview</h2>
                        <p>
                            <strong>Research & Development </strong>
                            Innovation thrives when brilliant minds come together with a shared 
                            purpose—to tackle real-world challenges and create meaningful change. 
                            At the heart of progress lies collaboration, where diverse perspectives and 
                            expertise intersect to generate powerful ideas. By fostering a culture of 
                            teamwork and mutual inspiration, we empower researchers, visionaries, and 
                            problem-solvers to go beyond conventional boundaries. Through this 
                            collaborative spirit, we not only spark groundbreaking discoveries but also 
                            support the development of creative, practical solutions that address society’s 
                            most pressing issues. Together, we drive progress, fuel innovation, and shape a future
                            where bold ideas transform the world.
                        </p>
                    </div>
                    <div className="overview-image">
                        <img src={innovationImg} alt="Innovation" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Welcome;
