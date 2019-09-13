import Link from 'next/Link'

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

        </li>
      </ul>
    </div>
  </nav>
</div>)

export default Header
