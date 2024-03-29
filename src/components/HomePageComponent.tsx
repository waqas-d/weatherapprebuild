import React from 'react'
import './pages/HomePageComponent.css';
import Card from 'react-bootstrap/Card';



const HomePageComponent = () => {
    const currWeathDefault ={
        coord: {
            lon: number
            lat: number
        },
        weather:
        {
    
            main: "",
            description: "",
            icon: "",
        },
        main: {
            temp: "",
            temp_min: "",
            temp_max: ""
        }

    }
    return (
        <div className='bgImg'>
            <br />
            <br />
            <div className="container fontStyle">
                <div className="col inputFieldAlign ">
                    <input type="text" placeholder='Search City or Zip Code' className='inputFieldStyle' />
                </div>
                <br />
                <br />
                <br />
                <div className="col d-flex justify-content-center">
                    <Card style={{ width: '35rem' }} className='cardStyle'>
                        <Card.Body>
                            <Card.Title>Lodi, CA</Card.Title>
                            <hr />
                            <div className="row currWeathRowAlign">
                                <div className="col currWeathFirstRow">
                                    <h5>Today</h5>
                                    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="This is an image that is partly cloudy and partly sunny." />
                                    <h6>Partly Cloudy</h6>
                                    <h6>63°</h6>
                                </div>
                                <div className="col currWeathSecRow">
                                    <br />
                                    <br />
                                    <h6>Min</h6>
                                    <br />
                                    <h6>38°</h6>

                                </div>
                                <div className="col">
                                    <br />
                                    <br />
                                    <h6>Max</h6>
                                    <br />
                                    <h6>63°</h6>
                                </div>
                            </div>


                        </Card.Body>
                    </Card>
                </div>


                <br />
                <br />


                <div className="row">
                    <div className="col">
                    <Card style={{ width: '13rem', height: '20rem' }} className='cardStyle'>
                        <Card.Body>
                            <br />
                            <div className="row">
                                <div className="col currWeathFirstRow">
                                    <h3>TODAY</h3>
                                    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="This is an image that is partly cloudy and partly sunny." />
                                    <br />
                                    <br />
                                    <h6>Partly Cloudy</h6>
                                    <br />
                                    <h6>38° / 63°</h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col">
                    <Card style={{ width: '13rem', height: '20rem' }} className='cardStyle'>
                        <Card.Body>
                            <br />
                            <div className="row">
                                <div className="col currWeathFirstRow">
                                    <h3>THU 30</h3>
                                    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="This is an image that is partly cloudy and partly sunny." />
                                    <br />
                                    <br />
                                    <h6>Partly Cloudy</h6>
                                    <br />
                                    <h6>38° / 63°</h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col">
                    <Card style={{ width: '13rem', height: '20rem' }} className='cardStyle'>
                        <Card.Body>
                            <br />
                            <div className="row">
                                <div className="col currWeathFirstRow">
                                    <h3>FRI 31</h3>
                                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="This is an image that is partly cloudy and partly sunny." />
                                    <br />
                                    <br />
                                    <h6>Sunny</h6>
                                    <br />
                                    <h6>38° / 63°</h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col">
                    <Card style={{ width: '13rem', height: '20rem' }} className='cardStyle'>
                        <Card.Body>
                            <br />
                            <div className="row">
                                <div className="col currWeathFirstRow">
                                    <h3>SAT 01</h3>
                                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="This is an image that is partly cloudy and partly sunny." />
                                    <br />
                                    <br />
                                    <h6>Sunny</h6>
                                    <br />
                                    <h6>38° / 63°</h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col">
                    <Card style={{ width: '13rem', height: '20rem' }} className='cardStyle'>
                        <Card.Body>
                            <br />
                            <div className="row">
                                <div className="col currWeathFirstRow">
                                    <h3>SUN 02</h3>
                                    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="This is an image that is partly cloudy and partly sunny." />
                                    <br />
                                    <br />
                                    <h6>Partly Cloudy</h6>
                                    <br />
                                    <h6>38° / 63°</h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePageComponent
