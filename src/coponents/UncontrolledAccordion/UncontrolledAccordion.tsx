import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)
    const onClickButtonHandler =()=>{
        //collapsed ? setCollapsed(false) : setCollapsed(true)
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClickButtonHandler={onClickButtonHandler}
            />
           {/* <button onClick={onClickButtonHandler}>toggle</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClickButtonHandler:()=>void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickH3Handler=()=>{
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