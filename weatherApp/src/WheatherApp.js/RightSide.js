import React from 'react';

const weekDays = ['Monday', 'Tuesday', 'Wensday', 'Thirtday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']
const time = new Date();

const RightSide = (props) => {
    return (
        <div className="infoSide">
            <main className="mainR">
                <div className="date">
                    <div className="dateText">{time.getDate()}-{months[time.getMonth()]},
                    <span> {weekDays[time.getDay()]}</span>
                    <div className='country'><sub>{props.city}</sub>{props.country}</div>
                </div>
                </div>
                <div className="numerCard">
                    <span>{Math.floor(props.deg)} &deg; C</span>
                </div>
                <div className="sky">
                    <h2>{props.sky}</h2>
                </div>
            </main>
        </div>
    );
};

export default RightSide;