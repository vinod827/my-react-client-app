import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items:[],
      isLoaded:false
    }
  }

  componentDidMount(){
     fetch('https://my-resource-server.cfapps.io/resource/uploadedfiles', {
      headers: {
          authorization: 'Bearer effb6f5c-574e-4419-8790-5193233f9adb'
      }})
     .then(response => {
       response.json();
     })
     .then(json => {
         this.setState({
            isLoaded:true,
            items:json,
         })
     })
  }


  render() {

   var {isLoaded, items } = this.state;
   if(!isLoaded){
     return <div>Loading....</div>

   } else{

    return (
      <div className="App">
         <ul>
             {
               this.items.map(item => (
                 <li key={item.id}>
                  //File name:{item.name} | Created date:{item.date} | Hash:{name.link}
                  File name:{item}
                 </li>
               ))
             };
         </ul>
      </div>
    );
  }
  }
}

export default App;
