import React, {useRef, useState} from 'react';
import './App.css';
import Accordion from "./coponents/Accordion/Accordion";
import {Rating} from "./coponents/Rating/rating";
import {OnOff} from "./coponents/OnOf/OnOff";
import UncontrolledAccordion from "./coponents/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from './coponents/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from "./coponents/OnOf/UncontrolledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [retingValue, setRetingValue] = useState<RatingValueType>(0)
    const [collapsedValue1, setCollapsedValue1] = useState<boolean>(false)
    const [collapsedValue2, setCollapsedValue2] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <Accordion
                titleValue={"Users"}
                collapsed={collapsedValue2}
                onChange={() => setCollapsedValue2(!collapsedValue2)}
            />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>

    );
}

export default App;

