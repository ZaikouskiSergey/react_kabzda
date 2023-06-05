import React, {useEffect, useMemo, useState} from "react";

export default {
    title: "useEffect demo"
}
export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    },)

    useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])


    const onClickButton = () => {
        setFake(fake + 1)
    }
    return (
        <>
            Hello, {counter} {fake}
            <button onClick={onClickButton}>+</button>

        </>
    )

}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {

        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    const onClickFakeButton = () => {
        setFake(fake + 1)
    }
    const onClickCounterButton = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            Hello, {counter} {fake}
            {/* <button onClick={onClickFakeButton}>fake+</button>
            <button onClick={onClickCounterButton}>counter+</button>*/}

        </>
    )

}