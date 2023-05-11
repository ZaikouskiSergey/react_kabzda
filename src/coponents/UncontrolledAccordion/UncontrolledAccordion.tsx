import React, {useReducer} from "react";
import {Reducer, TOGGLE_COLLAPSED,} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(Reducer, {collapsed: true})


    const onClickButtonHandler = () => {
        //collapsed ? setCollapsed(false) : setCollapsed(true)
        dispatch({type: TOGGLE_COLLAPSED})
    }
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClickButtonHandler={onClickButtonHandler}
            />
            {/* <button onClick={onClickButtonHandler}>toggle</button>*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClickButtonHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickH3Handler = () => {
        props.onClickButtonHandler()
    }

    return <h3 onClick={onClickH3Handler}> --{props.title}--</h3>
}

type AccordionBody = {
    title: boolean
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;