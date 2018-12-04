import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items:[],
      isLoaded:false,
    }
  }

  componentDidMount(){

    fetch('https://my-resource-server.cfapps.io/resource/uploadedfiles', {
              mode: 'no-cors',
              method: "GET",
              headers: {
                  'Accept': 'application/json',
                            'Content-Type': ' application/json',
                            'X-API-SERVER': '85499f9f',
                  'Authorization': 'Bearer 74b1976b-d814-41cd-90ec-8d5059e85217'
                        },
            }).then(res => res.json())
              .then(res => {
                if (res.status === 200){
                  console.log("accepted");
                  this.setState({
                     isLoaded:true,
                     items:res,
                  })
                }else {
                  console.log(res.error);
                }

                 console.log(res.error)
              }).catch(err => console.log(err))

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
               {item}
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
