import React from 'react'

const About = () => {
    return (
        <div className='container'>
            <h1 style={{color: 'white'}}>About</h1>
            <h5 style={{color: 'white'}}>This website provides the most up-to-date information about the coronavirus situatation in the UK.</h5>
            <p style={{color: 'white'}}>Information about how this website works can be found below:</p>
            <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title large">The Data</span>
                        <p>The data for this service is provided through the Covid-19 REST API. The link to this API can be found <a className='black-text' href={'https://about-corona.net/documentation'}>here</a></p>
                    </div>
            </div>

            <div className="card yellow darken-1">
                    <div className="card-content black-text">
                        <span className="card-title large">The Graphs</span>
                        <p>The graphs were made using the React wrapper for Chart.js <a className='blue-text' href={'https://github.com/jerairrest/react-chartjs-2'}>(Link)</a></p>
                    </div>
            </div>
        </div>
    )
}

export default About