import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
}

const Layout = (props) => (<div style={layoutStyle}>

  <Head>
    <title>my title</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  </Head>
  <Header/>
   {props.children}
</div>)

export default Layout
