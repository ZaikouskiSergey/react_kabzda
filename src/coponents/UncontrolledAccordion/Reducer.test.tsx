 import {Reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";
 import {Simulate} from "react-dom/test-utils";
 import error = Simulate.error;
test("collapsed should be true", ()=>{
    //data
    const state : StateType = {
        collapsed: false
    }

    //action

const newState = Reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(1).toBe(1)
    expect(newState.collapsed).toBe(true)
})

 test("collapsed should be false", ()=>{
     //data
     const state : StateType = {
         collapsed: true
     }
     //action
     const newState = Reducer(state, {type: TOGGLE_COLLAPSED})
     //expectation
     expect(1).toBe(1)
     expect(newState.collapsed).toBe(false)
 })

 test (" reducer should be return error", ()=>{
     const state : StateType = {
         collapsed: true
     }

     expect(()=> {Reducer(state, {type: "fail"})}).toThrowError()
 })