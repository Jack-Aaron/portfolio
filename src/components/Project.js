import React from 'react';

const Project = (props) => {

    return (
        <div className="columns portfolio-item">
            <div className="item-wrap">

                <img
                    src={props.imgurl}
                    style={{
                        border: '1px solid black',
                        borderRadius: 3
                    }}
                    className="item-img" alt="project animated gif" />
                <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h5>{props.name}</h5>
                        <p>{props.description}</p>
                        <div className="row">
                            <div className="columns">
                                <a href={props.modalurl} className="portfolio-zoom"><i class="fas fa-search-plus"></i></a>
                            </div>
                            <div className="columns">
                                <a href={props.linkurl} className="portfolio-link"
                                    target='_blank' rel='noopener noreferrer'><i class="fas fa-link"></i></a>
                            </div>
                            <div className="columns">
                                <a href={props.githuburl} style={{ visibility: props.githuburl ? 'visible' : 'hidden' }}
                                    className="portfolio-link"
                                    target='_blank' rel='noopener noreferrer'><i class="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );


}

export default Project;
