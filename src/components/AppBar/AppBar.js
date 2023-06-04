import { Link } from 'react-router-dom';
import './AppBar.css';
// import { StatusFilter } from 'components/StatusFilter/StatusFilter';

export const AppBar = () => {
  return (
    <header className="section-header">
      <nav className="header-nav">
        <ul className="header-nav_list">
          <li className="header-nav_list-item">
            <Link className="header-nav_list-link" to={'/'}>
              Home
            </Link>
          </li>
          <li className="header-nav_list-item">
            <Link className="header-nav_list-link" to={'/tweets'}>
              Tweets
            </Link>
          </li>
        </ul>
      </nav>
      {/* <StatusFilter /> */}
    </header>
  );
};
