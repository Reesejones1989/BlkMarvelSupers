import {Link} from 'react-router-dom'
import "./Nav.css"

export default function Nav(props) {
  return (
    <div className='Nav'>
    <Link className='Links' to="/">
        <div>Character List</div>
    </Link>
    <Link className='Links' to="/about">
        <div>About</div>
    </Link>
    {/* <Link to="/">
        <div>Character List</div>
    </Link> */}

    </div>
  )
}