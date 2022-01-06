import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
        <div className="App">
			<p><strong>Welcome to Principal MiniProgram</strong></p>
			<p>This POC is to demontrate the capabilities of Principal Web Application to integrate with TNGD eWallet mini program API</p>
			<p>The scope of this POC:-
			<ul>
				<li>Principal Web Application <strong>integrate</strong> eWallet miniprogram information in industry <strong>token based authentication</strong></li>
				<li>Principal Web Application <strong>encrypt/decrypt</strong> eWallet miniprogram information</li>
				<li>Principal Web Application <strong>retrieve eKYC information</strong> from eWallet miniprogram</li>
				<li>Principal Web Application <strong>submit payment information</strong> to eWallet miniprogram payment API</li>
				<li>Principal Web Application <strong>receive payment status</strong> from eWallet miniprogram</li>
				<li>Principal Web Application <strong>display payment status</strong></li>
			</ul>
			<strong>Note:</strong> This POC must be running inside TNGD sandbox mobile app.
			</p>
		</div>
    );
  }
}

export default Home;