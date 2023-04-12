import React from 'react';
import './App.css';
import Accordion from "./coponents/Accordion/Accordion";
import {Rating} from "./coponents/Rating/rating";
import {OnOff} from "./coponents/OnOf/OnOff";
import UncontrolledAccordion from "./coponents/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from './coponents/UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div className={'App'}>
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <UncontrolledRating />


{/*            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
              Arcticle 1
            <Rating value={1} />
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>

            Arcticle 2
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />*/}
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

