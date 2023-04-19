import React from "react";
import {RatingValueType} from "../../App";

type RatingPropsType = {
    value: RatingValueType
    setRetingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendered')

    return (
        <div>
            <Star selected={props.value > 0} value={1} setRetingValue={props.setRetingValue}/>
            <Star selected={props.value > 1} value={2} setRetingValue={props.setRetingValue}/>
            <Star selected={props.value > 2} value={3} setRetingValue={props.setRetingValue}/>
            <Star selected={props.value > 3} value={4} setRetingValue={props.setRetingValue}/>
            <Star selected={props.value > 4} value={5} setRetingValue={props.setRetingValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setRetingValue: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    const onClickHandler = () => {
        props.setRetingValue(props.value)
    }
    console.log('Star rendered')
    return <span onClick={onClickHandler}>{props.selected ? <b>star </b> : 'star '}</span>


}