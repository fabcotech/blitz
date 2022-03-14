import React, { Fragment } from "react";
import '../layouts/reset.scss';
import '../layouts/fonts.scss';
import '../layouts/main.scss';
import Footer from '../components/Footer.jsx';

const { PUBLIC_SITE } = import.meta.env;

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            charSet="UTF-8"
          />
          <link rel="icon" href={PUBLIC_SITE + "icon.png"}/>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" integrity="sha512-IgmDkwzs96t4SrChW29No3NXBIBv8baW490zk5aXvhCD8vuZM3yUSkbyTBcXohkySecyzIrUwiF/qV0cuPcL3Q==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <body>
          <div className="container">
            <div className="navbar">
              <a className="fc" href={PUBLIC_SITE}>Home</a>
              <a className="fc" href={PUBLIC_SITE + "protocol"}>Protocol</a>
            </div>

            { this.props.children }
          </div>
          <Footer />
        </body>
      </html>
    )
  }
}

export default Layout;