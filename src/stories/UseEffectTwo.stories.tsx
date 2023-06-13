import React, {useEffect, useMemo, useState} from "react";

export default {
    title: "useEffect Two demo"
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
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])
    return (
        <>
            Hello, {counter}
        </>
    )
}
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("component rendered")
    useEffect(() => {
        console.log("Effect occurred " + counter)

        return () => {
            console.log("RESET EFFECT " + counter)
        }

    }, [counter])
    const onClickCounterButton = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            Hello, {counter}
            <button onClick={onClickCounterButton}>counter+</button>
        </>
    )
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log("component rendered with " + text)

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
           // setText((state) => state + e.key)
            setText( text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <>
            Typed text, {text}
        </>
    )
}

export const SetTimeOutExample = () => {
    const [text, setText] = useState('')
    console.log("component rendered with " + text)

    useEffect(() => {
        const timeOutId = setTimeout(()=>{
            setText('2 seconds passed')

        },2000)
        return ()=> {
            clearTimeout(timeOutId)
        }
    }, [text])

    return (
        <>
            text: {text}
        </>
    )
}