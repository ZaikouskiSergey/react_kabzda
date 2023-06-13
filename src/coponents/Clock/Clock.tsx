import React, {useEffect, useState} from 'react';
import AnalogClock from "./AnalogClock";

type ClockPropsType = {
    view: 'analog' | 'digital'
}

function get2digitalsString(num: number) {
    return num < 10
        ? "0" + num
        : num

}

export const Clock: React.FC<ClockPropsType> = ({view}) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }


    }, [])

    const secondsStrings = get2digitalsString(date.getSeconds())
    const minutesStrings = get2digitalsString(date.getMinutes())
    const hoursStrings = get2digitalsString(date.getHours())

    return (
        <div>
            {view === 'analog' ? <AnalogClock/>
                : <div>
                    <span>{hoursStrings}</span>
                    :
                    <span>{minutesStrings}</span>
                    :
                    <span>{secondsStrings}</span>

                </div>}
        </div>

    );
};

export default Clock;