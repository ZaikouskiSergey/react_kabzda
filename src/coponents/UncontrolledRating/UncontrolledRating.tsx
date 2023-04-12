import React, {useState} from "react";

type RatingPropsType = {
    //value: number
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendered')
    const [value, setValue] = useState(0)

    const onClickHandler=(index:number)=>{
        setValue(index)
    }

    return (
        <div>
            <Star selected={value > 0}/><button onClick={()=>onClickHandler(1)}>1</button>
            <Star selected={value > 1}/><button onClick={()=>{onClickHandler(2)}}>2</button>
            <Star selected={value > 2}/><button onClick={()=>{onClickHandler(3)}}>3</button>
            <Star selected={value > 3}/><button onClick={()=>{onClickHandler(4)}}>4</button>
            <Star selected={value > 4}/><button onClick={()=>{onClickHandler(5)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendered')

    if (props.selected === true) {
        return <span><b>stars </b></span>
    } else {
        return <span>stars </span>
    }

}