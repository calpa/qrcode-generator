import React, { Component } from "react";

import QRCode from "qrcode";

class QRCodeGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: ""
    };
  }

  generateQRCode(url = "") {
    QRCode.toDataURL(url)
      .then(imgSrc => {
        this.setState({
          imgSrc
        });
      })
      .catch(err => {
        if (url !== "") {
          console.error(err);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    this.generateQRCode(nextProps.url);
  }

  render() {
    return <img src={this.state.imgSrc} />;
  }
}

export default QRCodeGenerator;
