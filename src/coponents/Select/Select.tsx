
import React from "react";
import {RatingValueType} from "../../App";

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]

}
type ItemType ={
    title: string,
    value: any
}

export function Select(props: SelectPropsType) {


    return (
        <div>
            <div>{}</div>
            {props.items.map(i=> <div>{i.title}</div>)}
        </div>
    )
}
