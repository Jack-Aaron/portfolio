import React from 'react';

const ResumeExperience = (props) => {

    let sectionData = props.section;

    return (
        <div className={`row ${sectionData.type}`}>

            <div className="three columns header-col">
                <h1><span>{sectionData.type}</span></h1>
            </div>

            <div className="nine columns main-col">
                {
                    sectionData.data.map((item) => {
                        return (
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>{item.InstitutionName}</h3>
                                    <p className="info">
                                        {item.specialization}
                                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                                    <p>
                                        {item.Achievements}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                <hr />
            </div>
        </div>
    )
}

export default ResumeExperience;
