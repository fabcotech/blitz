import React, { Fragment } from "react";
import './Footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="sitemap">
            <div>
              <div>
                FABCO 2022 all rights reserved
              </div>
              <div>
                <a target="_blank" href="https://dappy.tech">Dappy</a>
              </div>
              <div>
                <a target="_blank" href="https://twitter.com/fabcotech">Twitter</a>
              </div>
              <div>
                contact[at]fabco[dot]<h3 style={{ display: 'none' }}>hey</h3>tech
              </div>
            </div>
            <div>
  
            </div>
          </div>
          <div className="social-media">
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;