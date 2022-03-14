import React, { Fragment } from "react";
import './WebServer.scss'

const codeExtract = `...
{ id: 1030, name: "Bob Dalyn", key: "04ac2eca249d35ca68a1f9" },
{ id: 1031, name: "Paul Downes", key: "0426be633ad84bdf20a23e" },
{ id: 1032, name: "Tony Franck", key: "049c8924f9be0660b5ab3a" },
...`

const codeExtract2 = `{
  "version": 1,
  "host": "partnersportal.com",
  "nonce": "4cf5e59e0f43b4cdf2f5925f5b318b29b33"
}`

class WebServer extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title is-2">Web server</h2>
        <h3 className="title is-3">Asymetric encryption</h3>
        <p>
          Blitz authentication uses asymetric encryption and signatures, not passwords. In the database, files or whatever way the server uses to store the data of the authenticatees (or clients) <strong>hashed passwords are dropped in the favor of public keys or hashed public keys.</strong>
          <br />
          <br />
          Secp256k1 and ed25519 are ideal choice. Feel free to tell us your opinion about the most appropriate algorithm(s).
          <br />
          <br />
          Users in the DB would look something like this :
        </p>
        <code>
          <pre>{codeExtract}</pre>
        </code>
        <br />
        <br />
        <h3 className="title is-3">Challenge-response authentication</h3>
        <h4 className="title is-4">Submission</h4>
        <p>
          An authentication succeeds when and only when a server sees that a payload it has forged has been cryptographically signed.
          <br />
          <br />
          Payload is an JSON formatted string with 3 keys:
          <br />- <strong>version</strong>: incremental number, in anticipation for future blitz implementations.
          <br />- <strong>host</strong>: (Host + Port) must match the URL onto which the browser will receive the Blitz header.
          <br />- <strong>nonce</strong>: A random one-time-per-challenge string (which way to generate this string is out of scope here).
          <br />
          <br />
          Example :
        </p>
        <code>
          <pre>{codeExtract2}</pre>
        </code>
        <p>
          <strong>The server initiates the authentication, not the browser.</strong> The server submits an authentication request (or challenge) to the browser through HTTP header, we think it's the simplest way to do it, feel free to comment this choice. <span>Blitz-Authentication</span> sounds good.
          <br />
          <br />
          Example : the client loads the <span>/</span> or <span>/login</span> page, in the HTTP response the server adds the <span>Blitz-Authentication : ...</span> header. 
        </p>
        <br />
        <h4 className="title is-4">Asynchronous verification</h4>
        <p>
          The server constantly listens on the <span>/blitz-authentication</span> route (GET or whatever request), whenever a request pops with a <span>Blitz-Authentication-Response</span> header, it will check that the signature matches one the payloads it has previously forged.
          <br />
          <br />
          If and only if the signature is valid (vis-à-vis client's public key), the authentication is successful and complete. The server adds a<span>Set-Cookie</span> header. Nothing new here, the cookie(s) can be a <a href="https://datatracker.ietf.org/doc/html/rfc7519" target="_blank">JWT</a> or any other data structure. It is a session cookie, with the token or string that only the server and the client know for sure. It can have an expiration or not, and will of course be checked by the server for each protected operation.
          <br />
          <br />
          <strong>Note : </strong>If the signature is invalid, the server could just ignore it or send error message (please tell us what's best IYO).
          <br />
          <br />
          <strong>Note : </strong>Secp256k1 and ed25519 signature verification is of course outside of this scope. Dozens of libraries in many languages can do it.
        </p>
      </div> 
    );
  }
}

export default WebServer;