import React from 'react';

const WeatherForm = props => (
    <div className='card card-body'>
        <form onSubmit={props.getWeather}>
            <div className='mb-3'>
                <input type='text' name='city' placeholder='Your City Name' className='form-control' autoFocus/>
            </div>
            <div className='mb-3'>
                <input type='text' name='country' placeholder='Your Country Name' className='form-control'></input>
            </div>
            <button className='btn btn-success col-12'>
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;