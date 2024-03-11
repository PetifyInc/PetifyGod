import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes

function Home({ name, type }) {
  return (
    <div>
      <nav>
        {type === 'admin' ? (
          <ul>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/user">User Dashboard</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
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
