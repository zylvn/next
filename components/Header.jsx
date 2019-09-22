import Link from 'next/link';

const LinkStyle = {
  marginRight: 15
}

const Header = () => (
//   <div>
//   <Link href="/">
//     <a style={LinkStyle}>Home</a>
//   </Link>
//   <Link href="/about">
//     <a style={LinkStyle}>About</a>
//   </Link>
// </div>
<div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link href="#">
      <a className="navbar-brand">Navbar</a>
    </Link>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-Link">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-Link">About</a>
          </Link>
          <Link href="/user">
            <a className="nav-Link">User</a>
          </Link>
          <Link href="/user?name=vaan" as='/user/vaan'>
            <a className="nav-Link">User Vaan</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>



  {/* <ul className="">
    <li className="nav-item">
      <Link href="/">
        <a className="nav-Link">Home</a>
      </Link>
      <Link href="/about">
        <a className="nav-Link">About</a>
      </Link>
      <Link href="/user">
        <a className="nav-Link">User</a>
      </Link>
    </li>
  </ul> */}

</div>)

export default Header
