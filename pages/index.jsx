import "../style.css";
import "../style.scss";
import fetch from 'isomorphic-unfetch'

import Layout from '../components/MainLayout.jsx'

const Index = (props) => {

// console.log(props);

return (
  <div>
  <Layout>
    <p className="example">Hello Next.js</p>

    <div className="card text-white bg-primary mb-3">
      <div className="card-header">Header</div>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>


  </Layout>

</div>)};


Index.getInitialProps = async ()=>{

// console.log("Hi");

// const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await fetch('https://jsonplaceholder.typicode.com/todos');
// console.log(data);
const result = await data.json();
// console.log(result);
return{posts:result};
};


export default Index
