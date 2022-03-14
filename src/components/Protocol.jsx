import React, { Fragment, useState } from "react";
import WebServer from './WebServer.jsx';
import WebBrowser from './WebBrowser.jsx';
import Reflexion from './Reflexion.jsx';

export default () => {
  const [tab, setTab] = useState("webserver");
  return (
    <div>
      <h1 className="title is-1">Protocol</h1>
      <p className="small">
        Blitz was officially launched in march 2022, it is very early. At one point is may have a proper RFC. If you are developer, security researcher or a company interested in Blitz please contact us on twitter or through email contact[at]fabco[dot]tech. This document is a rough early specification.
      </p>
      <br />
      <div className="tabs">
        <ul>
          <li onClick={() => setTab("webserver")} className={tab === "webserver" ? "is-active" : ""}><a>Web server</a></li>
          <li onClick={() => setTab("webbrowser")} className={tab == "webbrowser" ? "is-active" : ""}><a>Web browser and client</a></li>
          <li onClick={() => setTab("reflexion")} className={tab == "reflexion" ? "is-active" : ""}><a>Technical reflexion</a></li>
        </ul>
      </div>
      <br />
      { tab === "webserver" && <WebServer /> }
      { tab === "webbrowser" && <WebBrowser /> }
      { tab === "reflexion" && <Reflexion /> }
    </div>
  )
}
