import React, { useState } from 'react';
import { fetchWeather } from './fetchWeather';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { Container, Row, Col } from 'reactstrap'

function Main() {

    const [query, setQuery] = useState('');
    const [deg, setDeg] = useState(0);
    const [city, setCity] = useState('')
    const [country ,setCountry] = useState('')
    const [sky, setSky] = useState('')

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);
            setDeg(data.main.temp);
            setCity(data.name);
            setCountry(data.sys.country);
            setSky(data.weather[0].description);
            console.log(data);
        }
    }

    return (
        <div className="main">
            <div className='bg'>
                <Container className="containerr">
                    <Row className="roww">
                        <Col md="6" className="" className='coll col-l'>
                            <LeftSide search={search} setQuery={setQuery}/>
                        </Col>
                        <Col md="6" className="coll">
                            <RightSide deg={deg} city={city} country={country} sky={sky}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Main;