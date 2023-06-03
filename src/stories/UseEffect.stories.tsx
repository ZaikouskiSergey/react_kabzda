import React, {useEffect, useMemo, useState} from "react";

export default {
    title: "useEffect demo"
}
export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')

    useEffect(()=>{
        console.log("useEffect")
        document.title = counter.toString()
        //api.getUsers().then('')
        //setInterval
        //indexDB
        //document.getElementId
        //document.title = "User"
    }, [counter])
    const onClickButton = () => {
        setFake(fake+1)
    }
    return (
        <>
            Hello, {counter} {fake}
            <button onClick={onClickButton}>+</button>

        </>
    )

}