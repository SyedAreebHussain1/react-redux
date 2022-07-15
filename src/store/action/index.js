// const set_data = () => {
//     console.log("hello")
// }
// const  alertBtn = () => {
//     alert("hello")
// }
// export {set_data,alertBtn}



// const set_data = () => {
//     return (dispatch) =>{
//         console.log("hello")
//     }
// }
// const  alertBtn = () => {
//     return (dispatch) =>{
//       alert("hello")
// }
// }
// export {set_data,alertBtn}



// const set_data = (data) => {
//     return (dispatch) =>{
//         dispatch({
//             type:'SETDATA',data:data
//         })
//     }
// }
// const  alertBtn = () => {
//     return (dispatch) =>{
//         dispatch({
//         type:'helloalert'
//         })
//     }
// }
// export {set_data,alertBtn}



const set_data = (data) => {
    return (dispatch) =>{
        dispatch({
            type:'SETDATA',data:data
        })
    }
}
const  alertBtn = () => {
    return (dispatch) =>{
        dispatch({
        type:'helloalert'
        })
    }
}
export {set_data,alertBtn}