// const INITIAL_STATE = {
//     username: "ghousahmed",
//     email: "ghousahmed12@gmail.com"
// }
// export default (state = INITIAL_STATE, action) => {
//     console.log("auth-reducer=>", action)
   
//     return state
// }



// const INITIAL_STATE = {
//     username: "ghousahmed",
//     email: "ghousahmed12@gmail.com"
// }
// export default (state = INITIAL_STATE, action) => {
//     console.log("auth-reducer=>", action.type)
//     if(action.type == 'helloalert'){
//         alert(`auth-reducer=> ${action.type}`)
//     }  
//     return state
// }




// const INITIAL_STATE = {
//     username: "ghousahmed",
//     email: "ghousahmed12@gmail.com"
// }
// export default (state = INITIAL_STATE, action) => {
//     console.log("auth-reducer=>", action)  
//     return state
// }





const INITIAL_STATE = {
    username: "ghousahmed",
    email: "ghousahmed12@gmail.com"
}
export default (state = INITIAL_STATE, action) => {
    console.log("auth-reducer-action=>", action.type)
    // if(action.type == 'helloalert'){
    //     alert(`auth-reducer=> ${action.type}`)
    // } 
    switch (action.type){
        case 'helloalert':
            return (
                alert("hello")
            )
         }
    return state
}