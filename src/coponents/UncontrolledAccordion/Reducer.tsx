export type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}
export const Reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED :
            return {...state, collapsed: !state.collapsed} as const
        default :
            // return state
            throw new Error('Bad action type')
    }
}