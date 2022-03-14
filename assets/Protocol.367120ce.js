import{r as p,R as h}from"./index.0ec25061.js";var b={exports:{}},n={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=p.exports,u=60103;n.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var d=Symbol.for;u=d("react.element"),n.Fragment=d("react.fragment")}var w=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,g={key:!0,ref:!0,__self:!0,__source:!0};function m(t,r,c){var s,o={},a=null,l=null;c!==void 0&&(a=""+c),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(l=r.ref);for(s in r)y.call(r,s)&&!g.hasOwnProperty(s)&&(o[s]=r[s]);if(t&&t.defaultProps)for(s in r=t.defaultProps,r)o[s]===void 0&&(o[s]=r[s]);return{$$typeof:u,type:t,key:a,ref:l,props:o,_owner:w.current}}n.jsx=m;n.jsxs=m;b.exports=n;var v=b.exports;const{jsx:e,jsxs:i,Fragment:S}=v,k=`...
{ id: 1030, name: "Bob Dalyn", key: "04ac2eca249d35ca68a1f9" },
{ id: 1031, name: "Paul Downes", key: "0426be633ad84bdf20a23e" },
{ id: 1032, name: "Tony Franck", key: "049c8924f9be0660b5ab3a" },
...`,x=`{
  "version": 1,
  "host": "partnersportal.com",
  "nonce": "4cf5e59e0f43b4cdf2f5925f5b318b29b33"
}`;class N extends h.Component{render(){return i("div",{children:[e("h2",{className:"title is-2",children:"Web server"}),e("h3",{className:"title is-3",children:"Asymetric encryption"}),i("p",{children:["Blitz authentication uses asymetric encryption and signatures, not passwords. In the database, files or whatever way the server uses to store the data of the authenticatees (or clients) ",e("strong",{children:"hashed passwords are dropped in the favor of public keys or hashed public keys."}),e("br",{}),e("br",{}),"Secp256k1 and ed25519 are ideal choice. Feel free to tell us your opinion about the most appropriate algorithm(s).",e("br",{}),e("br",{}),"Users in the DB would look something like this :"]}),e("code",{children:e("pre",{children:k})}),e("br",{}),e("br",{}),e("h3",{className:"title is-3",children:"Challenge-response authentication"}),e("h4",{className:"title is-4",children:"Submission"}),i("p",{children:["An authentication succeeds when and only when a server sees that a payload it has forged has been cryptographically signed.",e("br",{}),e("br",{}),"Payload is an JSON formatted string with 3 keys:",e("br",{}),"- ",e("strong",{children:"version"}),": incremental number, in anticipation for future blitz implementations.",e("br",{}),"- ",e("strong",{children:"host"}),": (Host + Port) must match the URL onto which the browser will receive the Blitz header.",e("br",{}),"- ",e("strong",{children:"nonce"}),": A random one-time-per-challenge string (which way to generate this string is out of scope here).",e("br",{}),e("br",{}),"Example :"]}),e("code",{children:e("pre",{children:x})}),i("p",{children:[e("strong",{children:"The server initiates the authentication, not the browser."})," The server submits an authentication request (or challenge) to the browser through HTTP header, we think it's the simplest way to do it, feel free to comment this choice. ",e("span",{children:"Blitz-Authentication"})," sounds good.",e("br",{}),e("br",{}),"Example : the client loads the ",e("span",{children:"/"})," or ",e("span",{children:"/login"})," page, in the HTTP response the server adds the ",e("span",{children:"Blitz-Authentication : ..."})," header."]}),e("br",{}),e("h4",{className:"title is-4",children:"Asynchronous verification"}),i("p",{children:["The server constantly listens on the ",e("span",{children:"/blitz-authentication"})," route (GET or whatever request), whenever a request pops with a ",e("span",{children:"Blitz-Authentication-Response"})," header, it will check that the signature matches one the payloads it has previously forged.",e("br",{}),e("br",{}),"If and only if the signature is valid (vis-\xE0-vis client's public key), the authentication is successful and complete. The server adds a",e("span",{children:"Set-Cookie"})," header. Nothing new here, the cookie(s) can be a ",e("a",{href:"https://datatracker.ietf.org/doc/html/rfc7519",target:"_blank",children:"JWT"})," or any other data structure. It is a session cookie, with the token or string that only the server and the client know for sure. It can have an expiration or not, and will of course be checked by the server for each protected operation.",e("br",{}),e("br",{}),e("strong",{children:"Note : "}),"If the signature is invalid, the server could just ignore it or send error message (please tell us what's best IYO).",e("br",{}),e("br",{}),e("strong",{children:"Note : "}),"Secp256k1 and ed25519 signature verification is of course outside of this scope. Dozens of libraries in many languages can do it."]})]})}}var A=N;class B extends h.Component{render(){return i("div",{children:[e("h2",{className:"title is-2",children:"Web browser and client"}),e("p",{children:"Blitz is ideally implemented at the browser level, it may also be proposed as an Chrome or Firefox extension, although we're not sure that this poses no security issues."}),e("br",{}),e("br",{}),e("h3",{className:"title is-3",children:"Client configuration"}),i("p",{children:["The secret and security properties of Blitz authentication lies in the way it is configured on the web browser side by the client.",e("br",{}),e("br",{}),"The browser or the browser extension offers a configuration (or settings) page for Blitz. In this page the client creates cryptographic key pairs, or references pairs he already knows.",e("br",{}),e("br",{}),"In addition to creating key pairs the client associates the public keys to  ",e("strong",{children:"trusted hoststhat he knows will require Blitz authentication"}),".",e("br",{}),e("br",{}),e("strong",{children:"Note : "}),"We currently have no opinion on wether or not the websites can submit browser-level requests to be added as a trusted host.",e("br",{}),e("br",{}),"For each host the client can choose one of the two modes:",e("br",{}),"- Automatic authentication : no pop-up, the browser directly signs payloads.",e("br",{}),"- Confirmation based authentication : a browser or extension pop-up pops each time a server requires Blitz authentication.",e("br",{}),e("br",{}),"This is it for the client configuration. The browser now knows exactly what host can use Blitz authentication, and the associated public key for each host."]}),e("br",{}),e("br",{}),e("h3",{className:"title is-3",children:"Web browser operations"}),i("p",{children:["Anytime the browser sees a ",e("span",{children:"Blitz-Authentication"})," header, it pauses the request first (let's call this request request A).",e("br",{}),"Then it tries to find the host of request A in the user settings of Blitz :",e("br",{}),e("br",{}),"- If it exists and is in Automatic mode it checks the structure of the payload, (2) signs it with private key (3) sends it back to the ",e("span",{children:"/blitz-authentication"})," path on the same auth (4) waits for the response (5) sets the cookies from ",e("span",{children:"Set-Cookie"})," header to the request A (6) resumes request A.",e("br",{}),"- If it exists and mode is Confirmation based authentication, it displays a pop-up with two choices : Accept and sign, Reject authentication. If Accept the browser performs the same steps (2)-(6) as above.",e("br",{}),"- If host does not exist, then Blitz authentication is refused, this header is ignored or removed, request A is resumed.",e("br",{}),e("br",{})]}),i("p",{children:[e("strong",{children:"Note : "}),' A black list could be added as well, to prevent a trusted domain name from spamming the user with authentication pop-ups. An alternative solution to this is also a third "remove domain" choice added to the pop-up.']})]})}}var T=B;class z extends h.Component{render(){return i("div",{children:[e("h2",{className:"title is-2",children:"Technical Reflexion"}),e("h3",{className:"title is-3",children:"Phishing proof"}),i("p",{children:[e("strong",{children:"Passwords and email addresses can be easily remembered by humans, and that is precisely why they are bad as a mean to authenticate on web portals and/or high value applications."}),e("br",{}),e("br",{}),"On the other hand cryptographic signatures cannot be remembered or calculated by humans (normal humans). Only software can do it.",e("br",{}),e("br",{}),"An information system that uses Blitz for authentication dropps passwords and email addresses (for authentication). The phishing-proof property of Blitz becomes then almost obvious. Even if the client lands on a fake website, the authentication will not occur.",e("br",{}),e("br",{}),"In a phishing attack situation, the client may not know that he is on ",e("strong",{children:"partnesrportal.com"})," instead of ",e("strong",{children:"partnersportal.com"}),", but the browser knows it very well\xA0",e("img",{src:"/_lockwithkeys.png"}),e("img",{src:"/_lockwithkeys.png"}),e("img",{src:"/_lockwithkeys.png"}),", the domains don't match. No need for Artificial Intelligence or complex pattern matching.",e("br",{}),e("br",{}),"Attacker's web servers are incapable of fooling anything because they are not ",e("strong",{children:"partnesrportal.com"})," in the eyes of the browser. ",e("strong",{children:"DNS or the dappy name system"})," (",e("a",{href:"https://dappy.tech",children:"a secure alternative to the DNS"})," with .dappy domains) ",e("strong",{children:"identities are tied to the authentication system."})]}),e("br",{}),e("br",{}),e("h3",{className:"title is-3",children:"Instant passwordless authentication"}),i("p",{children:["The very point of having Blitz at browser level is to allow for first-request authentication. When the ",e("strong",{children:"https://partnersportal.com"})," page loads, it is authenticated, the challenge has already occured.",e("br",{}),e("br",{}),"It is a full-win from a UX perspective in addition to the security and protection properties."]})]})}}var _=z,R=()=>{const[t,r]=p.exports.useState("webserver");return i("div",{children:[e("h1",{className:"title is-1",children:"Protocol"}),e("p",{className:"small",children:"Blitz was officially launched in march 2022, it is very early. At one point is may have a proper RFC. If you are developer, security researcher or a company interested in Blitz please contact us on twitter or through email contact[at]fabco[dot]tech. This document is a rough early specification."}),e("br",{}),e("div",{className:"tabs",children:i("ul",{children:[e("li",{onClick:()=>r("webserver"),className:t==="webserver"?"is-active":"",children:e("a",{children:"Web server"})}),e("li",{onClick:()=>r("webbrowser"),className:t=="webbrowser"?"is-active":"",children:e("a",{children:"Web browser and client"})}),e("li",{onClick:()=>r("reflexion"),className:t=="reflexion"?"is-active":"",children:e("a",{children:"Technical reflexion"})})]})}),e("br",{}),t==="webserver"&&e(A,{}),t==="webbrowser"&&e(T,{}),t==="reflexion"&&e(_,{})]})};export{R as default};
