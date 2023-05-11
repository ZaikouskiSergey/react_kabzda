export type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
export const Reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_COLLAPSED :
            return !state
        default :
            // return state
            throw new Error('Bad action type')
    }
}