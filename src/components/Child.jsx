import React from "react";

class Child extends React.Component{
    // static getDerivedStateFromProps(props,state) {
    //     console.log("getDerivedStateFromProps",props);
    //     return (
    //         <div>
    //         count:5
    //         </div>
    //     ) 
    //   }
    componentWillUnmount(){
        console.log("Component khhalas")
    }
    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}
export default Child