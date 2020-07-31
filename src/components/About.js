import React from 'react';

const About = (props) => {

   let resumeData = props.resumeData;
   return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic" src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>This Guy Right Here.</h2>
               <p>
                  {
                     resumeData.aboutme
                  }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                     <h2>Deetz.</h2>
                     <p className="address">
                        <span>{resumeData.city}, {resumeData.state}, {resumeData.country}</span>
                        <br /><span>
                           <a href={`tel:${resumeData.phonenumber}`}>Call Me</a>
                        </span>
                        <br />
                        <span>
                           <a href={`mailto:${resumeData.email}?subject=Sick Website, Brah!`}>Email Me</a></span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumeData.resumeDownload} className="button" target="_blank" rel="noopener noreferrer"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default About;
