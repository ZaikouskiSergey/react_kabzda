import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
}

function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle
                    title={props.titleValue}
                    setCollapsedValue={props.onChange}
                />
                { !props.collapsed && <AccordionBody />}
            </div>
        )
}


type AccordionTitlePropsType = {
    title: string
    //collapsed: boolean
    setCollapsedValue:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={(e)=>props.setCollapsedValue()}> --{props.title}--</h3>
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

export default Accordion;