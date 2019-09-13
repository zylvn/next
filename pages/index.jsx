import "../style.css";
import "../style.scss";
import fetch from 'isomorphic-unfetch'

import Layout from '../components/MainLayout.jsx'

const Index = (props) => {

console.log(props);

return (
  <div>
  <Layout>
    <p className="example">Hello Next.js</p>
  </Layout>
</div>)};


Index.getInitialProps = async ()=>{
const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(data);
const result = await data.json();
console.log(result);
return{result}
};


export default Index
