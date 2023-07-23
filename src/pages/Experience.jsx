import React from 'react';
import '../styles/Experience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaUniversity, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import { darken } from 'polished';

const Experience = () => {
  // Define the unique color scheme
  const mainColor = '#3a67f4';
  const lighterColor = darken(0.5, mainColor);

  return (
    <div className="experience-container">
      <h2>WORK EXPERIENCE</h2>

      <VerticalTimeline>
        {/* Experience 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: mainColor, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid ${mainColor}` }}
          date="August 2020"
          iconStyle={{ background: lighterColor, color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Program Co-Ordinator, Coding Universe</h3>
          <h4 className="vertical-timeline-element-subtitle">IOE Thapathali Campus TU, Kathmandu, Nepal</h4>
          <ul className="responsibilities">
            <li>Conducted a coding universe program: college level competition as a ‘Program Co-ordinator’</li>
          </ul>
        </VerticalTimelineElement>

        {/* Experience 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: mainColor, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid ${mainColor}` }}
          date="Feb 2021"
          iconStyle={{ background: lighterColor, color: '#fff' }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">Django Co-instructor</h3>
          <h4 className="vertical-timeline-element-subtitle">IOE Thapathali Campus TU, Kathmandu, Nepal</h4>
          <ul className="responsibilities">
            <li>Ran a month-long Django workshop: Introducing basics of Python, HTML and CSS and the Django Framework.</li>
            <li>Designed interactive activities and hands-on projects to foster student engagement and participation.</li>
          </ul>
        </VerticalTimelineElement>

        {/* Experience 3 */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: mainColor, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid ${mainColor}` }}
          date="March 2021 – Sep 2021"
          iconStyle={{ background: lighterColor, color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineering intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Tara International, Kathmandu, Nepal</h4>
          <ul className="responsibilities">
            <li>Involved in all phases of Software Development and Support in developing web and desktop applications.</li>
            <li>Proficient in design Object-Oriented Programming (OOPS) well-versed in versioning tools like GIT, GitHub.</li>
            <li>Conducted unit testing and integration testing to ensure application functionality and performance.</li>
          </ul>
        </VerticalTimelineElement>

        {/* Experience 4 */}
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: mainColor, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid ${mainColor}` }}
          date="Nov 2021 – Sep 2022"
          iconStyle={{ background: lighterColor, color: '#fff' }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">Software engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">Soho Automations, Kathmandu, Nepal</h4>
          <ul className="responsibilities">
            <li>Involved in the entire project lifecycle from design, development & Testing.</li>
            <li>Developed and maintained web applications using Python.</li>
            <li>Used Model View Controller (MVC) architectural Design Patterns to develop the product.</li>
            <li>Contributed to development of new features and enhancement to existing application and technical documentation.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
