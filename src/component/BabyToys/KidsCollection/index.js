import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
const KidsCollection = () => {
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
            <div id="baby_offer_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="baby_offer_banner_text">
                                <h2>Off For Kids Collection</h2>
                                <Link to="/shop" className="theme-btn-one bg-black btn_md">View collection</Link>
                                <div className="baby_todays_count">
                                    <div id="countdown_grocery">
                                        <ul>
                                            <li><span>{timerDays}</span>days</li>
                                            <li><span>{timerHours}</span>Hours</li>
                                            <li><span>{timerMinutes}</span>Minutes</li>
                                            <li><span>{timerSeconds}</span>Seconds</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KidsCollection