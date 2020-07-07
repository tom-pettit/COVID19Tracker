import React from 'react'
import axios from 'axios'
import CountUp from 'react-countup'

class Stats extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        axios.get('https://corona-api.com/countries/GB')
        .then(res => {
            console.log(res.data)
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        
        const dataObject = this.state.data ? (
            <div>
                
                <div className="row">
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div className="col s1 red-text"><h1 style={{fontSize:'100px'}}><CountUp duration={4} end={this.state.data.data.today.deaths}/></h1></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div className="col s1 yellow-text"><h1 style={{fontSize:'100px'}}><CountUp duration={4} end={this.state.data.data.today.confirmed}/></h1></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                </div>

                <div className="row">
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div className="col s1 red-text"><h1 style={{fontSize:'50px'}}>deaths today</h1></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div className="col s1 yellow-text"><h1 style={{fontSize:'50px'}}>infections today</h1></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                    <div class="col s1"></div>
                </div>

                <br></br>

                <div className="card" style={{backgroundColor: '#27fb6b'}}>
                    <div className="card-content" style={{color: '#002855', fontWeight: 'bold'}}>
                        <span className="card-title" style={{fontWeight: 'bold', color: 'red'}}><CountUp duration={2} end={this.state.data.data.latest_data.deaths}/></span>
                        <p>This is the total number of <span style={{fontWeight: "bold", color: 'red'}}>deaths</span> in the UK from coronavirus</p>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: '#27fb6b'}}>
                    <div className="card-content" style={{color: '#002855', fontWeight: 'bold'}}>
                        <span className="card-title" style={{fontWeight: 'bold', color: 'yellow'}}><CountUp duration={2} end={this.state.data.data.latest_data.confirmed}/></span>
                        <p>This is the total number of <span style={{fontWeight: "bold", color: 'yellow'}}>infections</span> in the UK from coronavirus</p>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: '#27fb6b'}}>
                    <div className="card-content" style={{color: '#002855', fontWeight: 'bold'}}>
                        <span className="card-title" style={{fontWeight: 'bold', color: 'purple'}}><CountUp duration={2} end={this.state.data.data.latest_data.calculated.cases_per_million_population}/></span>
                        <p>This is the number of <span style={{fontWeight: "bold", color: 'purple'}}>cases per million</span> of the UK population</p>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: '#27fb6b'}}>
                    <div className="card-content" style={{color: '#002855', fontWeight: 'bold'}}>
                        <span className="card-title" style={{fontWeight: 'bold', color: '#ff570a'}}><CountUp duration={2} end={this.state.data.data.latest_data.calculated.death_rate}/>%</span>
                        <p>This is the <span style={{fontWeight: "bold", color: '#ff570a'}}>death rate</span> of the virus in the UK</p>
                    </div>
                </div>
                <div className="card" style={{backgroundColor: '#27fb6b'}}>
                    <div className="card-content" style={{color: '#002855', fontWeight: 'bold'}}>
                        <span className="card-title" style={{fontWeight: 'bold', color: '#0e81fb'}}>31/1/2020</span>
                        <p>This is the date of the <span style={{fontWeight: "bold", color: '#0e81fb'}}>first case</span> of the virus in the UK</p>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                <p>There is no data available</p>
            </div>
        )

        return(
            <div className='container'>
                <div>{dataObject}</div>
                <p style={{color: '#979dac', fontWeight: 'bold'}}>(note: values of 0 for today's stats indicate the data for today has not yet been posted)</p>
            </div>
        )
    }
}

export default Stats