import React, {useEffect, useState} from 'react';
import './clock.css'

export const AnalogClock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours()

    const hourDeg = (hours + minutes / 60) * 30
    const minutesDeg = minutes * 6
    const secondDeg =seconds * 6

    return (
        <div className="analog-clock">
            <div
                className="hand hour-hand"
                style={{ transform: `rotate(${hourDeg}deg)` }}
            />
            <div
                className="hand minute-hand"
                style={{ transform: `rotate(${minutesDeg}deg)` }}
            />
            <div
                className="hand second-hand"
                style={{ transform: `rotate(${secondDeg}deg)` }}
            />
            <div className="center-circle" />
        </div>

    );
};

export default AnalogClock;