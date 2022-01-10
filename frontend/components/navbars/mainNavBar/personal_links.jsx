import React from 'react';

const personalLinks = (props) => {
    return(
        <div id="personal-links">
            <a href="https://angel.co/u/susan-zea">
                <img id="angellist" src={window.angellist} alt="angellist link" />
            </a>
            <a href="https://github.com/susanzea">
                <img id="github" src={window.github} alt="github link" />
            </a>
            <a href="https://github.com/susanzea/trelloh">
                <img id="source" src={window.source} alt="source code link" />
            </a>
        </div>
    )
}

export default personalLinks;