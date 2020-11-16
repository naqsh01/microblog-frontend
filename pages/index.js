import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import {Flags} from "../utils/flags";
import Layout from "../components/layout";

export default function Home({data}) {
  return (
    <Layout>
      <div className="container">
        <div className="box mt-4" style={{backgroundColor: "#22243c"}}>
          <div className="columns">
            <div className="column is-three-quarters">
              <h1 className="title" style={{color: "white"}}>Share Your Thoughts!</h1>
            </div>
            <div className="column">
              <img className="is-pulled-right" src="/DW_wordmark.png" alt="DevOps World"/>
            </div>
          </div>
          <hr/>
          <div className="columns">
            <div className={`box column ${data.sidebar ? "is-three-quarters" : ""}`}>
              <div className="box">
                <div className="field is-marginless">
                  <label className="label">
                    What's going on today?
                  </label>
                  <div className="control">
                    <textarea className="textarea"/>
                  </div>
                </div>
                <button className="button is-dark mt-4">Submit</button>
              </div>
              <hr className="hr"/>
              <ul>
                <li><span className="has-text-weight-bold has-text-success">Elena Benoit 9:37 am:</span> Really enjoying
                  today's keynote!
                </li>
                <li><span className="has-text-weight-bold has-text-success">Brian Dawson 9:37 am:</span> First demo was
                  awesome, looking forward to more product integrations.
                </li>
                <li><span className="has-text-weight-bold has-text-success">Kathy Lam 9:39 am:</span> Feature flags are
                  the most underrated technology in software development today. Fight me on this.
                </li>
              </ul>
            </div>
            {data.sidebar ?

              <div className="box column">
                <h3 className="is-size-4 has-text-weight-bold">Users list</h3>
                <ul>
                  <li>Shawn Ahmed</li>
                  <li className="has-text-weight-bold has-text-success">Emmanuel Bamishaye</li>
                  <li className="has-text-weight-bold has-text-success">Elena Benoit</li>
                  <li>April Mace</li>
                  <li className="has-text-weight-bold has-text-success">Brian Dawson</li>
                  <li>Logan Donley</li>
                  <li className="has-text-weight-bold has-text-success">Kathy Lam</li>
                  <li>Anand Chauhan</li>
                </ul>
              </div>
              :
              null}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const sidebar = Flags.sidebar.isEnabled()
  return {
    props: {
      data: {
        sidebar
      }
    }
  }
}
