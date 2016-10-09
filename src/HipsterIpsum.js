import React from 'react';

export default class HipsterIpsum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hipsterIpsumText: ''
    };

    this.hipsterIpsum = this.hipsterIpsum.bind(this);
    this.onHipsterIpsumChange = this.onHipsterIpsumChange.bind(this);
  }

  onHipsterIpsumChange(payload) {
    this.setState({
      hipsterIpsumText: {__html: payload.text}
    });
  }

  hipsterIpsum() {
    const onHipsterIpsumChange = this.onHipsterIpsumChange;
    let options = {
      method: 'GET'
    };

    fetch('http://hipsterjesus.com/api', options)
      .then(response => response.json())
      .then(payload => {
        onHipsterIpsumChange(payload);
      })
      .catch(error => {
        console.log('OH NOES ' + JSON.stringify(error));
      })
  }


  render() {
    return (
      <div>
        <div>
          <button onClick={this.hipsterIpsum}>Get Hipster Ipsum</button>
        </div>
        <div>
          {this.state.hipsterIpsumText &&
          <div>
            <h3>Hipster Ipsum Time</h3>
            <div dangerouslySetInnerHTML={this.state.hipsterIpsumText}></div>
          </div>
          }
        </div>
      </div>
    );
  }
}