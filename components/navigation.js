import React from 'react';
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          microblog
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span/>
          <span/>
          <span/>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
          <a className="navbar-item">
            Home
          </a>
          </Link>
          <Link href="/">
          <a className="navbar-item" href="/">
            About
          </a>
          </Link>

        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link href="/">
                <a className="is-dark button">
                  <span>
                    Sign Up
                  </span>
                </a>
                </Link>
              </p>
              <p className="control">
                <Link href="/login">
                <a className="button is-light">
                  <span>Login</span>
                </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
