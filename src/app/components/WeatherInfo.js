import React from 'react';

const WeatherInfo = props => {

    console.log(props)

    return (
        <div>
            {
            props.error && 
            <div className='alert alert-danger'>
            <p>{props.error}</p>
            </div>
            }
            {
                props.temperature ? 
                    <div className='card card-body'>
                        <p>
                            Location: {props.city}, {props.country}
                        </p>
                        <p>
                            Temperature: {props.temperature} °C, {props.description}
                        </p>
                        <p>
                            Feels Like: {props.feels_like} °C
                        </p>
                        <p>
                            Humidity: {props.humidity}%
                        </p>
                        <p>
                            Wind Speed: {props.wind_speed}
                        </p>
                    </div>
                :
                <div className='card card-body'>
                    <p>No Request Yet</p>
                </div>
            }
        </div>
    )
}

export default WeatherInfo;