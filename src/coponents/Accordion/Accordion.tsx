import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsedValue:(collapsed: boolean)=>void
}

function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle
                    title={props.titleValue}
                    collapsed={props.collapsed}
                    setCollapsedValue={()=> props.setCollapsedValue(!props.collapsed)}
                />
                { !props.collapsed && <AccordionBody />}
            </div>
        )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsedValue:(collapsed: boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickH3Handler =()=>{
        props.setCollapsedValue(props.collapsed)
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

export default Accordion;