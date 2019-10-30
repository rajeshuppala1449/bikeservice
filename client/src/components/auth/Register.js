import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/registeruser" className="btn btn-primary ">
              Sign Up as User
            </Link>
            <Link to="/registeradmin" className="btn btn-primary">
              Sign Up as Admin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
