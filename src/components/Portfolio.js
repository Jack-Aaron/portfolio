import React from 'react';
import Project from './Project';

const Portfolio = (props) => {

  let resumeData = props.resumeData;

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Follow My Favorite Projects:</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item) => {
                return (
                  <Project
                    imgurl={item.imgurl}
                    name={item.name}
                    description={item.description}
                    modalurl={item.modalurl}
                    githuburl={item.githuburl}
                    linkurl={item.linkurl}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;