import React from "react";
type ItemType ={
    title: string,
    value: any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value:any)=>void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                setCollapsedValue={props.onChange}
            />
            {!props.collapsed && <AccordionBody
                items={props.items}
                onClick={props.onClick}
            />}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string
    //collapsed: boolean
    setCollapsedValue: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={(e) => props.setCollapsedValue()}> --{props.title}--</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el,index)=>{
                return <li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>
            })}

        </ul>
    )
}
export default Accordion;