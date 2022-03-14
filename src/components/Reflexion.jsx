import React, { Fragment } from "react";
import './Reflexion.scss'

const { PUBLIC_SITE } = import.meta.env;

class Reflexion extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title is-2">Technical Reflexion</h2>
        <h3 className="title is-3">Phishing proof</h3>
        <p>
          <strong>
            Passwords and email addresses can be easily remembered by humans, and that is precisely why they are bad as a mean to authenticate on web portals and/or high value applications.
          </strong>
          <br />
          <br />
          On the other hand cryptographic signatures cannot be remembered or calculated by humans (normal humans). Only software can do it.
          <br />
          <br />
          An information system that uses Blitz for authentication dropps passwords and email addresses (for authentication). The phishing-proof property of Blitz becomes then almost obvious. Even if the client lands on a fake website, the authentication will not occur.
          <br />
          <br />
          In a phishing attack situation, the client may not know that he is on <strong>partnesrportal.com</strong> instead of <strong>partnersportal.com</strong>, but the browser knows it very well&nbsp;
          <img src={`${PUBLIC_SITE}/_lockwithkeys.png`} />
          <img src={`${PUBLIC_SITE}/_lockwithkeys.png`} />
          <img src={`${PUBLIC_SITE}/_lockwithkeys.png`} />
          , the domains don't match. No need for Artificial Intelligence or complex pattern matching.
          <br />
          <br />
          Attacker's web servers are incapable of fooling anything because they are not <strong>partnesrportal.com</strong> in the eyes of the browser. <strong>DNS or the dappy name system</strong> (<a href="https://dappy.tech">a secure alternative to the DNS</a> with .dappy domains) <strong>identities are tied to the authentication system.</strong> 
        </p>
        <br />
        <br />
        <h3 className="title is-3">Instant passwordless authentication</h3>
        <p>
          The very point of having Blitz at browser level is to allow for first-request authentication. When the <strong>https://partnersportal.com</strong> page loads, it is authenticated, the challenge has already occured.
          <br />
          <br />
          It is a full-win from a UX perspective in addition to the security and protection properties.
        </p>
      </div> 
    );
  }
}

export default Reflexion;