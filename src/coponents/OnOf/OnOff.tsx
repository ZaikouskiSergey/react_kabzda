import {useState} from "react";

type PropsType = {
    // on: boolean

}

export function OnOff(props: PropsType) {
    console.log('OnOff rendering')
    let [on,setOn]=useState(false) // hook with init value
    console.log('переменная on=' +on)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: '2px',
        backgroundColor: on ? "lightgreen" : "white",
        cursor: 'default'
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: '2px',
        backgroundColor: !on ? "red" : "white",
        cursor: 'default'
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: '5px',
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "lightgreen" : "red",
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true);
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false);
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )

}