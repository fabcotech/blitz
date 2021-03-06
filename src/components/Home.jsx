import React, { Fragment, useState } from "react";
import './Home.scss'

const { PUBLIC_SITE } = import.meta.env;

export default () => {
  return (
    <Fragment>
      <h1 className="title is-1">The ultimate passwordless anti-phishing authentication system</h1>
      <br />
      <p>
        Did you know that phishing attacks are one of the most costly attack types for web companies and portals ?
      </p>
      <br />

      <p>
        Some companies <a target="_blank" href="https://www.cybersecuritydive.com/news/phishing-cost-enterprise/605110/">spend millions each year</a> to handle the damages caused by phishing attacks, and have greatly diminished productivity.
      </p>
      <br/>
      <br/>
      <br/>
      <h2 className="title is-3">
        Blitz authentication <strong>reduces to zero</strong> the exposure to email-based and web-based phishing attacks*.
      </h2>


      <p>
        Blitz is a secure protocol that must be implemented at the browser level. It has been developed by the <a target="_blank" href="https://dappy.tech">dappy</a> team, and is currently only supported in dappy browser.
        <br/>
      </p>
      <br/>
      <br/>

      <ul>
        <li>Authentication works with <strong>one-time cryptographic signatures and public keys, not passwords.</strong></li>
        <li>The employees or clients* are
        <strong>
          never asked for anything (no pop-ups or sign in forms)
          <img src={`${PUBLIC_SITE}_smile.png`} />
          <img src={`${PUBLIC_SITE}_smile.png`} />
          <img src={`${PUBLIC_SITE}_smile.png`} />
        </strong>
        Prior to authenticating and only once, they must set up the public key in the browser and associate it to one or many trusted domain names (example: <strong>partnersportal.com</strong>)</li>
      </ul>


      <br />
      <br />
      <br />
      <br />
      <h2 className="title is-2 green">
        Good consequences for the security of your critical data and protection of your employees + clients
      </h2>
      <br />
      <p className="big green">
        <img src={`${PUBLIC_SITE}_lockwithkeys.png`} />
        <img src={`${PUBLIC_SITE}_lockwithkeys.png`} />
        <img src={`${PUBLIC_SITE}_lockwithkeys.png`} />
        <strong>
          Clients will not ever send credentials to the wrong phishing website.</strong> The browser and blitz protocol guarantee it. Blitz only signs trusted domain names, it never authenticates for a slightly different domain name (example: <strong>partnerpsortal.com</strong>)
      </p>
      <br />
      <br />
      <p className="big green">
        <img src={`${PUBLIC_SITE}_directhit.png`} />
        <img src={`${PUBLIC_SITE}_directhit.png`} />
        <img src={`${PUBLIC_SITE}_directhit.png`} />
        Clients feel safer and care less about the phishing attempts. They can focus more on their daily job and you too.
      </p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="tip">*many phishing attack schemes exist, the majority of them consist in stealing credentials on a fake/clone website, this is what we are talking about</p>
      <br />
      <p className="tip">*a client can be an employee, partner, or anyone else that is part of your database or IT system, and has the right to sign in and be authenticated</p>
      <br/>
    </Fragment>
  )
}
