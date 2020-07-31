import React from 'react';
import ResumeExperience from './ResumeExperience';

const Resume = (props) => {

  let resumeData = props.resumeData;
  return (
    <section id="resume">

      {
        resumeData.ResumeExperience && resumeData.ResumeExperience.map((section) => {

          return (
            <ResumeExperience section={section} />
          )
        })}














{/* skills.............................. */}

      <section className="row skill" id="ferd">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="three columns main-col">

          <p>
            {resumeData.skillsDescriptionFundamentals}
          </p>

          <div className="bars">

            <ul className="skills">
              {
                resumeData.skillsFundamentals && resumeData.skillsFundamentals.map((item) => {
                  return (
                    <li>
                      <span className={`bar-expand  ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                    </li>
                  )
                })
              }

            </ul>

          </div>

        </div>
        <div className="three columns main-col">

          <p>
            {resumeData.skillsDescriptionMERN}
          </p>

          <div className="bars">

            <ul className="skills">
              {
                resumeData.skillsMERN && resumeData.skillsMERN.map((item) => {
                  return (
                    <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                    </li>
                  )
                })
              }

            </ul>

          </div>

        </div>
        <div className="three columns main-col">

          <p>
            {resumeData.skillsDescriptionMarketing}
          </p>

          <div className="bars">

            <ul className="skills">
              {
                resumeData.skillsMarketing && resumeData.skillsMarketing.map((item) => {
                  return (
                    <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                    </li>
                  )
                })
              }

            </ul>

          </div>

        </div>

      </section>

    </section>
  );
}

export default Resume;
