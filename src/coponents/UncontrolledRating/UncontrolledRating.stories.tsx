import React, {useState} from "react";
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

export const RatingChanging = () => {
    return <UncontrolledRating defaultValue={0}/>
}

