import Layout from '../components/MainLayout.jsx'
import React, {Component} from 'react'

export default class User extends Component {

  static async getInitialProps({query}){
  return query;
  };

  constructor(props){super(props)}

  render(){

console.log(this.props)

return(

  <Layout>
    <p>This is the User page</p>
  </Layout>
)

}
}
