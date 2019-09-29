import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
}

const Layout = ({children, title}) => (<div style={layoutStyle}>

  <Head>
    <title>my title</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  </Head>
  <Header/>

  <h1>{title}</h1>
  {children}
</div>)

export default Layout
