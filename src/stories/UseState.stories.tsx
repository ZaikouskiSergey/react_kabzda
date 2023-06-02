import React, {useMemo, useState} from "react";

export default {
    title: "useState demo"
}

function generateData() {
    // difficult counting

    console.log('generate data')
    return 474804234235
}

export const Example1 = () => {
    console.log('Example1')

    //const initValue = generateData()

    //const initValue = useMemo(generateData, [])

    //const [counter, setCounter] = useState(initValue)

    const [counter, setCounter] = useState(generateData)

    const changer = (state:number)=> state +1

    const onClickButton = () => {
        setCounter(changer)
    }
    return (
        <>
            <button onClick={onClickButton}>+</button>
            {counter}
        </>
    )

}