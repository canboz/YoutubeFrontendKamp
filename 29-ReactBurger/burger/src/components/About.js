import React from 'react';
import BannerImage from '../assets/banneryeni.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti
          culpa, numquam ut eaque maiores enim accusantium harum corporis totam,
          officiis assumenda voluptate facere aliquam quo dolor, dolorum
          dignissimos quas. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Vero amet quidem dolores illo laboriosam, consequuntur adipisci
          deleniti corrupti nisi eaque laborum dolore quod architecto a ipsum
          distinctio at cumque ratione! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Officia iste, numquam quisquam facilis accusamus
          fuga recusandae. Quae quibusdam officia tempora beatae sunt possimus
          veritatis, sit recusandae. Modi autem deleniti labore? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Iure, quaerat doloremque?
          Incidunt, mollitia laborum. Eligendi quaerat necessitatibus magni vel,
          sint assumenda ut sed fugiat quis quibusdam accusantium, officiis
          eaque tempore.
        </p>
      </div>
    </div>
  );
}

export default About;
