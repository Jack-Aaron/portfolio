import React from 'react';

const ContactMe = (props) => {

  let resumeData = props.resumeData;

  return (
    <section id="contact">
      <div className="row section-head" style={{ textAlign: 'center' }}>
        <div className="twelve columns">
          <h2 className="lead" >
            {resumeData.name} | {resumeData.phonenumber} | {resumeData.email}
          </h2>
        </div>
      </div>
    </section >
  );
}

export default ContactMe;
