import { Link } from 'react-router-dom';

export default function Nav (props) {
  return (
    <nav className="top-nav">
      <Link to="/womens">
            <div>Women's</div>
        </Link>
        <Link to="/mens">
            <div>Men's</div>
        </Link>
        <Link to="/onthestreet">
            <div>On The Street</div>
        </Link>
        <Link to="/thecatwalk">
            <div>The Catwalk</div>
        </Link>
        <Link to="/adwatch">
            <div>AdWatch</div>
        </Link>
        <Link to="/about">
            <div>About</div>
        </Link>
    </nav>
  )
}