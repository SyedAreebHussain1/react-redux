import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Child from "./components/Child";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//  static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return null
//   }
//   render() {
//     return (<div>
//       <h1>React LifeCycle</h1>
//     </div>);
//   }
// }
// export default App;

// getDerivedStateFromProps
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       name : 'Areeb'
//     };
//     console.log("constructor");
//   }
//  static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return {
//       count: 5,
//       name:'Hussain'
//     }
//   }
//   render() {
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <h1>{this.state.count}</h1>
//       <h1>{this.state.name}</h1>
//     </div>);
//   }
// }
// export default App;

// componentDidMount
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       // name : 'Areeb'
//     };
//     console.log("constructor");
//   }
//  static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return {
//       count: 5,
//       // name:'Hussain'
//     }
//   }
//   componentDidMount(){
//     console.log("componentDidMount")
//   }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <h1>{this.state.count}</h1>
//       <h1>{this.state.name}</h1>
//     </div>);
//   }
// }
// export default App;

// componentDidMount k undr APi call ki ha
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//  static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return {
//       count: 5,
//     }
//   }
//   componentDidMount(){
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log('Data=>',data))
//     .catch(err => console.log('Error=>',err))
//   }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <h1>{this.state.count}</h1>
//       <h1>{this.state.name}</h1>
//     </div>);
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//  static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return null
//   }
//   componentDidMount(){
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => console.log('Data=>',data))
//     .catch(err => console.log('Error=>',err))
//   }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       {/* <h1>{this.state.count}</h1>
//       <h1>{this.state.name}</h1> */}
//     </div>);
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       data:[]
//     };
//     console.log("constructor");
//   }
//  static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return null
//   }
//   componentDidMount(){
//     console.log("componentDidMount")
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => {this.setState({data : data})})
//     .catch(err => console.log('Error=>',err))
//   }
//   render() {
//     console.log('render..',this.state.data)
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       {this.state.data.map((v,i)=>{
//         return(
//           <h1 key={i}>{v.title}</h1>
//         )
//       })}
//     </div>);
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//  static getDerivedStateFromProps() {
//     console.log("getDerivedStateFromProps");
//     return null
//   }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <h1>{this.state.count}</h1>
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Incre</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicre</button>
//     </div>
//     );
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//  static getDerivedStateFromProps(props,state) {
//     console.log("getDerivedStateFromProps",state);
//     return null
//   }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <Child areeb={this.state.count}/>
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Incre</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicre</button>
//     </div>
//     );
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//   render() {
//     console.log('render..')
//     // this.setState({

//     // })
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <Child areeb={this.state.count}/>
//       {/* <button onClick={()=>this.setState({count:this.state.count + 1})}>Incre</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicre</button> */}
//     </div>
//     );
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//   // static getDerivedStateFromProps(props,state) {
//   //   console.log("getDerivedStateFromProps",state);
//   //   return null
//   // }
//   shouldComponentUpdate(){
//     console.log("shouldComponentUpdate")
//     return false
//   }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <Child count={this.state.count}/>
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Incre</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicre</button>
//     </div>
//     );
//   }
// }
// export default App;

// shouldComponentUpdate
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//   shouldComponentUpdate(){
//     console.log("shouldComponentUpdate")
//     return false

//   }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <Child count={this.state.count}/>
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Incre</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicre</button>
//     </div>
//     );
//   }
// }
// export default App;

// shouldComponentUpdate
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//   static getDerivedStateFromProps(props,state){
//     console.log("getDerivedStateFromProps",state)
//     return null
//   }
//   shouldComponentUpdate(){
//     console.log("shouldComponentUpdate")
//     if(this.state.count < 5){
//       return true
//     }else{
//       return false
//     }
//   }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <Child count={this.state.count}/>
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Incre</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicre</button>
//     </div>
//     );
//   }
// }
// export default App;

// getSnapshotBeforeUpdate()
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//   getSnapshotBeforeUpdate(preProps,preState){
//     console.log("getSnapshotBeforeUpdate",preState)
//     return 10
//   }
//   componentDidUpdate(preProps,preState,snapShot){
//     console.log("componentDidUpdate",snapShot)
//   }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       <Child count={this.state.count}/>
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Incre</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicre</button>
//     </div>
//     );
//   }
// }
// export default App;

// componentWillUnmount()
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor");
//   }
//   // getSnapshotBeforeUpdate(preProps,preState){
//   //   console.log("getSnapshotBeforeUpdate",preState)
//   //   return 10
//   // }
//   // componentDidUpdate(preProps,preState,snapShot){
//   //   console.log("componentDidUpdate",snapShot)
//   // }
//   static getDerivedStateFromProps(props,state){
//         console.log("getDerivedStateFromProps",state)
//         return null
//       }
//   render() {
//     console.log('render..')
//     return (
//     <div style={{textAlign:'center'}}>
//       <h1>React LifeCycle</h1>
//       {this.state.count < 5 && <Child count={this.state.count}/>}
//       <button onClick={()=>this.setState({count:this.state.count + 1})}>Incre</button>
//       <button onClick={()=>this.setState({count:this.state.count - 1})}>Dicre</button>
//     </div>
//     );
//   }
// }
// export default App;




// REDUX
// mapStateToProps
// import { connect } from "react-redux";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     console.log("redux-data=>",this.props);
//     console.log("redux-data=>",this.props.name);
//     console.log("redux-data=>",this.props.email);
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>{this.props.topic}</h1>
//         <h1>{this.props.name}</h1>
//         <h1>{this.props.email}</h1>
//         <h1>{this.props.school}</h1>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state, props) => ({
//   name: state.name,
//   email: state.email,
//   school:'saylani',
//   topic: state.topic
// });
// export default connect(mapStateToProps, null)(App);





// mapStateToProps
// import { connect } from "react-redux";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     console.log("redux-data=>",this.props.app_name);
//     console.log("redux-data=>",this.props.username);
//     console.log("redux-data=>",this.props.email);
//     console.log("redux-data=>",this.props);
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>{this.props.app_name}</h1>
//         <h1>{this.props.username}</h1>
//         <h1>{this.props.email}</h1>
//         <h1>{this.props.school}</h1>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state, props) => ({
//   username:state.auth.username,
//   email:state.auth.email,
//   app_name:state.app.app_name,
//   school:'saylani'
// });
// export default connect(mapStateToProps, null)(App);



// mapDispatchToProps
// import { connect } from "react-redux";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     console.log("redux-data=>",this.props.app_name);
//     console.log("redux-data=>",this.props.username);
//     console.log("redux-data=>",this.props.email);
//     console.log("redux-data=>",this.props);
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>{this.props.app_name}</h1>
//         <h1>{this.props.username}</h1>
//         <h1>{this.props.email}</h1>
//         <h1>{this.props.school}</h1>
//         <button onClick={()=> this.props.set_data()}>Set Data</button>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state, props) => ({
//   username:state.auth.username,
//   email:state.auth.email,
//   app_name:state.app.app_name,
//   school:'saylani'
// });
// const mapDispatchToProps = (dispatch) =>({
//   set_data: () => console.log("hello")
// })
// export default connect(mapStateToProps, mapDispatchToProps)(App);



// import { set_data,alertBtn } from "./store/action";
// import { connect } from "react-redux";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     console.log("redux-data=>",this.props.app_name);
//     console.log("redux-data=>",this.props.username);
//     console.log("redux-data=>",this.props.email);
//     console.log("redux-data=>",this.props);
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>{this.props.app_name}</h1>
//         <h1>{this.props.username}</h1>
//         <h1>{this.props.email}</h1>
//         <h1>{this.props.school}</h1>
//         <button onClick={()=> this.props.set_data()}>Set Data</button>
//         <button onClick={()=> this.props.alertbtn()}>Alert Btn</button>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state, props) => ({
//   username:state.auth.username,
//   email:state.auth.email,
//   app_name:state.app.app_name,
//   school:'saylani'
// });
// const mapDispatchToProps = (dispatch) =>({
//   set_data: () => set_data(),
//   alertbtn: () => alertBtn()
// })
// export default connect(mapStateToProps, mapDispatchToProps)(App);






// import { set_data,alertBtn } from "./store/action";
// import { connect } from "react-redux";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     console.log("redux-data=>",this.props.app_name);
//     console.log("redux-data=>",this.props.username);
//     console.log("redux-data=>",this.props.email);
//     console.log("redux-data=>",this.props);
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>{this.props.app_name}</h1>
//         <h1>{this.props.username}</h1>
//         <h1>{this.props.email}</h1>
//         <h1>{this.props.school}</h1>
//         <button onClick={()=> this.props.set_data()}>Set Data</button>
//         <button onClick={()=> this.props.alertbtn()}>Alert Btn</button>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state, props) => ({
//   username:state.auth.username,
//   email:state.auth.email,
//   app_name:state.app.app_name,
//   school:'saylani'
// });
// const mapDispatchToProps = (dispatch) =>({
//   set_data: () => dispatch( set_data()),
//   alertbtn: () => dispatch(alertBtn())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(App);






// import { set_data,alertBtn } from "./store/action";
// import { connect } from "react-redux";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     console.log("redux-data=>",this.props.app_name);
//     console.log("redux-data=>",this.props.username);
//     console.log("redux-data=>",this.props.email);
//     console.log("redux-data=>",this.props);
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>{this.props.app_name}</h1>
//         <h1>{this.props.username}</h1>
//         <h1>{this.props.email}</h1>
//         <h1>{this.props.school}</h1>
//         <button onClick={()=> this.props.set_data("han bhai data app.jsx se bhi ly liya")}>Set Data</button>
//         <button onClick={()=> this.props.alertbtn()}>Alert Btn</button>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state, props) => ({
//   username:state.auth.username,
//   email:state.auth.email,
//   app_name:state.app.app_name,
//   school:'saylani'
// });
// const mapDispatchToProps = (dispatch) =>({
//   set_data: (data) => dispatch( set_data(data)),
//   alertbtn: () => dispatch(alertBtn())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(App);





import { set_data,alertBtn } from "./store/action";
import { connect } from "react-redux";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("redux-data=>",this.props.app_name);
    console.log("redux-data=>",this.props.username);
    console.log("redux-data=>",this.props.email);
    console.log("redux-data=>",this.props);
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.props.app_name}</h1>
        <h1>{this.props.username}</h1>
        <h1>{this.props.email}</h1>
        <h1>{this.props.school}</h1>
        <button onClick={()=> this.props.set_data("han bhai data app.jsx se bhi ly liya")}>Set Data</button>
        <button onClick={()=> this.props.alertbtn()}>Alert Btn</button>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  username:state.auth.username,
  email:state.auth.email,
  app_name:state.app.app_name,
  school:'saylani'
});
const mapDispatchToProps = (dispatch) =>({
  set_data: (data) => dispatch( set_data(data)),
  alertbtn: () => dispatch(alertBtn())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);