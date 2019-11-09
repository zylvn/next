const mongourl = 'mongodb://uwgvmecjhwegxe8gd1q4:oYiyl0feEiqj9xpUcA8P@bkflbpzgdzgflvs-mongodb.services.clever-cloud.com:27017/bkflbpzgdzgflvs';
mongoose.connect(mongourl, {useNewUrlParser: true});

// const db = client.db('mongodbtest');
// const collection = db.collection('rooms')
const mongoose = require('mongoose');


import React, {Component} from 'react'

export default class Test extends Component {

  // static async getInitialProps({query}){
  // return query;
  // };
  // constructor(props){super(props)}


//   dothis = () => {
//     console.log('this is:', "Hey");
//     collection.insertOne({name: 'Roger'}, (err, result) => {
//     console.log('this is:', "Added");
// })
//   }



  render(){
console.log("this is a test");


return(


    <div>

  <button onClick={this.dothis}>YO</button>



    </div>

)

}
}
