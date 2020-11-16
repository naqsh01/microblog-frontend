import React, {useState} from 'react';
import Layout from "../components/layout";
import Link from "next/link";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Layout>
      <div className="container">
        <br/>
        <div className="box">
          <h2 className="is-size-4 has-text-centered">Login</h2>
          <hr className="hr"/>
          <form className="form">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="input" placeholder="homerjsimpson"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="***********" className="input"/>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-dark" type="submit">Submit</button>
              </div>
              <div className="control">
                <Link href="/signup"><a className="button is-light">Sign up</a></Link>
              </div>
            </div>
          </form>
        </div>
        <p><small><a onClick={() => {
          setUsername("normaluser")
          setPassword("normaluser")
        }}>Normal user: normaluser/normaluser</a></small></p>
        <p><small><a onClick={() => {
          setUsername("betauser")
          setPassword("betauser")
        }}>Beta user: betauser/betauser</a></small></p>
        <p><small><a onClick={() => {
          setUsername("admin")
          setPassword("admin")
        }}>Admin user: admin/admin</a></small></p>
      </div>
    </Layout>
  );
};

export default Login;
