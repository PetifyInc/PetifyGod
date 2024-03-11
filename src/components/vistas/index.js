import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext }  from './context/UserContext'; // Import UserContext

function Home({ name, type }) {
  const { logout } = useContext(UserContext); // Access logout function

  return (
    <div className="home-container">  {/* Add a class for styling */}
      <nav>
        {type === 'admin' ? (
          <ul>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>  {/* Use button for logout */}
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/user">User Dashboard</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>  {/* Use button for logout */}
            </li>
          </ul>
        )}
      </nav>
      <h1>Welcome, {name}</h1>
      <p>You are logged in as {type}.</p>
      <p>This is the home page.</p>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Home;
