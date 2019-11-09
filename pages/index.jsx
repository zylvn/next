import "../style.css";
import "../style.scss";
import fetch from 'isomorphic-unfetch'

import Layout from '../components/MainLayout.jsx'

const Index = (props) => {
const { posts }=props;

return (
  // <div>
  <Layout title="Hello Next.js">

  <div className='container'>
    {posts.map(post=>(
    <div className="card text-white bg-primary mb-3" key={post.id}>
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <p className="card-text">{post.body}</p>
      </div>
    </div>
))}
  </div>


  </Layout>

// </div>
)};


Index.getInitialProps = async (context)=>{

// console.log(context);

// const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(data);
const result = await data.json();
// console.log(result);
return{posts:result};
};


export default Index
