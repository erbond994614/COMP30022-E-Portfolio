import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

      <div className="footer">
        © 2018-{(new Date().getFullYear())} <strong>IT Project</strong>
      </div>
      
      </footer>
    );
  }
}

export default Footer;
