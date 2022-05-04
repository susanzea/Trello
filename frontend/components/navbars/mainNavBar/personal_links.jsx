import React from 'react';

const personalLinks = (props) => {
    return(
        <div id="personal-links">
            <a href="https://angel.co/u/susan-zea" target='_blank'>
                <img id="angellist" src={window.angellist} alt="angellist link" />
            </a>
            <a href="https://github.com/susanzea" target='_blank'>
                <img id="github" src={window.github} alt="github link" />
            </a>
            <a href="https://susanzea.com" target='_blank'>
                <img id="portfolio" src={window.source} alt="portfolio link" />
            </a>
        </div>
    )
}

export default personalLinks;