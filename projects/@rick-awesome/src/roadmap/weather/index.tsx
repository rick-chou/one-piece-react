/**
 * @author
 * @link https://codepen.io/HenryZarza/pen/QWJKvJx
 */

import { random } from 'lodash';
import './index.scss';
import {
  Cloudy,
  HumidityLevel,
  PartlyCloudy,
  Precipitation,
  Rainy,
  Snowy,
  Stormy,
  Sunny,
} from './svg';

const temp = () => random(20, 30);
const pre = () => random(0, 100);
const hum = () => random(0, 100);

const ForecastVal = () => (
  <>
    <h2 className="item__forecast-value">{temp()}</h2>
    <p className="item__forecast-precipitation">
      <Precipitation />
      {pre()}%
    </p>
    <p className="item__forecast-low">
      <HumidityLevel />
      {hum()}%
    </p>
  </>
);

const Weather = () => {
  return (
    <main className="main">
      <section className="item cloudy">
        <h4 className="item__date">wed</h4>
        <h3 className="item__day">8</h3>
        <div className="item__forecast-container">
          <Cloudy />
          <ForecastVal />
        </div>
      </section>
      <section className="item sunny">
        <h4 className="item__date">thu</h4>
        <h3 className="item__day">9</h3>
        <div className="item__forecast-container">
          <Sunny />
          <ForecastVal />
        </div>
      </section>
      <section className="item stormy">
        <h4 className="item__date">fri</h4>
        <h3 className="item__day">10</h3>
        <div className="item__forecast-container">
          <Stormy />
          <ForecastVal />
        </div>
      </section>
      <section className="item snowy">
        <h4 className="item__date">sat</h4>
        <h3 className="item__day">11</h3>
        <div className="item__forecast-container">
          <Snowy />
          <ForecastVal />
        </div>
      </section>
      <section className="item partly-cloudy">
        <h4 className="item__date">sun</h4>
        <h3 className="item__day">12</h3>
        <div className="item__forecast-container">
          <PartlyCloudy />
          <ForecastVal />
        </div>
      </section>
      <section className="item rainy">
        <h4 className="item__date">mon</h4>
        <h3 className="item__day">13</h3>
        <div className="item__forecast-container">
          <Rainy />
          <ForecastVal />
        </div>
      </section>
    </main>
  );
};

export default Weather;
