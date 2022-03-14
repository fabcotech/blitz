import React, { Fragment } from "react";
import './WebBrowser.scss'

class WebBrowser extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title is-2">Web browser and client</h2>
        <p>
            Blitz is ideally implemented at the browser level, it may also be
            proposed as an Chrome or Firefox extension, although we're not sure that this poses no security issues.
        </p>
        <br />
          <br />
        <h3 className="title is-3">Client configuration</h3>
        <p>
          The secret and security properties of Blitz authentication lies in the way it is configured on the web browser side by the client.
          <br />
          <br />
          The browser or the browser extension offers a configuration (or settings) page for Blitz. In this page the client creates cryptographic key pairs, or references pairs he already knows.
          <br />
          <br />
          In addition to creating key pairs the client associates the public keys to  <strong>trusted hoststhat he knows will require Blitz authentication</strong>.
          <br />
          <br />
          <strong>Note : </strong>We currently have no opinion on wether or not the websites can submit browser-level requests to be added as a trusted host.
          <br />
          <br />
          For each host the client can choose one of the two modes:
          <br />- Automatic authentication : no pop-up, the browser directly signs payloads.
          <br />- Confirmation based authentication : a browser or extension pop-up pops each time a server requires Blitz authentication.
          <br />
          <br />
          This is it for the client configuration. The browser now knows exactly what host can use Blitz authentication, and the associated public key for each host.
        </p>
        <br />
        <br />
        <h3 className="title is-3">Web browser operations</h3>
        <p>
          Anytime the browser sees a <span>Blitz-Authentication</span> header, it pauses the request first (let's call this request request A).
          <br />
          Then it tries to find the host of request A in the user settings of Blitz :
          <br />
          <br />- If it exists and is in Automatic mode it checks the structure of the payload, (2) signs it with private key (3) sends it back to the <span>/blitz-authentication</span> path on the same auth (4) waits for the response (5) sets the cookies from <span>Set-Cookie</span> header to the request A (6) resumes request A.
          <br />- If it exists and mode is Confirmation based authentication, it displays a pop-up with two choices : Accept and sign, Reject authentication. If Accept the browser performs the same steps (2)-(6) as above.
          <br />- If host does not exist, then Blitz authentication is refused, this header is ignored or removed, request A is resumed.
          <br />
          <br />
        </p>
        <p>
          <strong>Note : </strong> A black list could be added as well, to prevent a trusted domain name from spamming the user with authentication pop-ups. An alternative solution to this is also a third "remove domain" choice added to the pop-up. 
        </p>
      </div> 
    );
  }
}

export default WebBrowser;