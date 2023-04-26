import React, {useState} from "react";
import {Rating} from "./rating";
import {RatingValueType} from "../../App";

export default {
    title: 'Rating',
    component: Rating,
};

export const EmptyStars = () => <Rating value={0} setRetingValue={x => x}/>
export const Rating1 = () => <Rating value={1} setRetingValue={x => x}/>
export const Rating2 = () => <Rating value={2} setRetingValue={x => x}/>
export const Rating3 = () => <Rating value={3} setRetingValue={x => x}/>
export const Rating4 = () => <Rating value={4} setRetingValue={x => x}/>
export const Rating5 = () => <Rating value={5} setRetingValue={x => x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} setRetingValue={ setRating}/>
}

