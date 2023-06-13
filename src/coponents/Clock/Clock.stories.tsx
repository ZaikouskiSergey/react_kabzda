import Clock from "./Clock";


export default {
    title: 'Clock',
    component: Clock

}

export const BaseAnalogExample=()=>{
    return <Clock view={'analog'}/>
}

export const BaseDigitalExample=()=>{
    return <Clock view={'digital'}/>
}

