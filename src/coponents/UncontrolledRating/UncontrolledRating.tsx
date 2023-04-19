import React, {useState} from "react";

type RatingPropsType = {
    //value: number
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendered')
    const [value, setValue] = useState(0)

    const onClickHandler = (index: number) => {
        setValue(index)
    }

    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1)}}/>
            <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
            <Star selected={value > 2} setValue={()=>{setValue(3)}}/>
            <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
            <Star selected={value > 4} setValue={()=>{setValue(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
    //value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    console.log('Star rendered')
    //return props.selected ? <span><b>stars </b></span> : <span>stars </span>

    return (
        <span onClick={() => {
            props.setValue()
        }}>
        {props.selected ? <b>stars </b> : 'stars '}
        </span>)
}