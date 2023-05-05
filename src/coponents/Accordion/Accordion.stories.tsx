import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};
const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const collapsedMode = () => <Accordion
    titleValue={'menu'}
    collapsed={true}
    onChange={callback} items={[]}
    onClick={onClickCallback}
/>
export const UncollapsedMode = () => <Accordion
    titleValue={'users'}
    collapsed={false}
    onChange={callback}
    items={[
        {title: 'petya', value: 1},
        {title: 'kolya', value: 2},
        {title: 'vasya', value: 3},
        {title: 'vanya', value: 4},
    ]}
    onClick={onClickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: 'petya', value: 1},
            {title: 'kolya', value: 2},
            {title: 'vasya', value: 3},
            {title: 'vanya', value: 4},
        ]}
        onClick={onClickCallback}
    />
}

