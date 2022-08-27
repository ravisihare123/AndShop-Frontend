import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/img/pharmacy/banner/mid-1.png'
import img2 from '../../../assets/img/pharmacy/banner/mid-2.png'
import img3 from '../../../assets/img/pharmacy/banner/mid-3.png'
import img4 from '../../../assets/img/pharmacy/banner/mid-4.png'
import img5 from '../../../assets/img/pharmacy/banner/mid-5.png'
const DealMonth = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('November 26 2023 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop Our Timer
                clearInterval(interval.current);
            } else {
                // update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer()
    })
    return (
        <>
            <section id="pharmacy_date_month" className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pharmacy_time_area">
                                <h2>Deal of the month</h2>
                                <p>Cur tantas regiones barbarorum obiit, tot maria transmist summo bono</p>
                                <div className="pharmacy_todays_count">
                                    <div id="pharmacy_grocery">
                                        <ul>
                                            <li><span id="days">{timerDays}</span>days</li>
                                            <li><span id="hours">{timerHours}</span>Hours</li>
                                            <li><span id="minutes">{timerMinutes}</span>Minutes</li>
                                            <li><span id="seconds">{timerSeconds}</span>Seconds</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="pharmacy_date_img">
                                        <Link to="/shop"><img src={img1} alt="img" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="pharmacy_date_img">
                                        <Link to="/shop"><img src={img2} alt="img" /></Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="pharmacy_date_img">
                                        <Link to="/shop">
                                            <img src={img3} alt="img" /></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="pharmacy_date_img">
                                        <Link to="/shop">
                                            <img src={img4} alt="img" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="pharmacy_date_img">
                                        <Link to="/shop">
                                            <img src={img5} alt="img" /></Link>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DealMonth