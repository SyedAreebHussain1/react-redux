const INITIAL_STATE = {
    app_name:'React-Redux',
}
export default (state =  INITIAL_STATE,action) => {
    console.log("app-redux-action=>", action)
    switch (action.type) {
        case "SETDATA":
            return({
                ...state,
                app_name: action.data
            })
    }
    return state
}