import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Updated import

const WorkExperienceTimeline = () => {
  const navigate = useNavigate(); // Updated to use useNavigate
  
  const experiences = [
    {
      id: 1,
      date: "Feb 2024 - Present",
      title: "Software Developer",
      company: "SigmaRed Technologies Inc. Canada",
      param: "sigmared",
      description: "Worked on multiple dashboard projects utilizing various tech stacks, including Angular and React, tailored to client-specific requirements.",
    },
    {
      id: 2,
      date: "Jan 2023 - Jun 2023",
      title: "Software Developer",
      company: "Moksh",
      param: "moksh",
      description: "Developed a platform that allows business analysts to make data-driven decisions by applying sentiment analysis to aggregated consumer reviews from various marketplaces, yielding insightful results.",
    },
    {
      id: 3,
      date: "Dec 2021 - Jan 2022",
      title: "Front-end Developer",
      company: "RShifts",
      param: "rshifts",
      description: "Designed and developed company portfolio website utilizing React’s components and layouts, enabling interactive frontend.",
    },
  ];

  const handleElementClick = (companyName) => {
    // Navigate to a new route, passing the company name as a parameter
    console.log("click")
    navigate(`/project/company/${companyName}`);
  };

  return (
    <VerticalTimeline>
      {experiences.map((exp) => (
        <VerticalTimelineElement
          key={exp.id}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'inherit', color: '#c770f0', transition: 'transform 0.5s', cursor: 'pointer' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date={exp.date}
          iconStyle={{ background: '#c770f0', color: '#fff' }}
          icon={<FaBriefcase />}
          onTimelineElementClick={() => handleElementClick(exp.param)}
          // onTimelineElementClick={}
          // onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          // onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <h3 className="vertical-timeline-element-title">{exp.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
          <p>
            {exp.description}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default WorkExperienceTimeline;
