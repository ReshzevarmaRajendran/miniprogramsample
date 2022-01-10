import React, {Component} from 'react';

class Payment extends Component{
    constructor(){
        super();
        this.state ={
            payment:'0'
        }
    }

    handlePay = async e =>{
        e.preventDefault();
        const response = await fetch('api/pay', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amt: this.state.payment * 100 }),
        });
        const body = await response.text();
        this.setState({ responsePay: body });
        console.log(body);
        const jsondata = JSON.parse(body);
        const jsondata2 = JSON.parse(jsondata.express);
	    this.setState({ responsePayUrl: jsondata2.actionForm.redirectionUrl});
        console.log(jsondata2.actionForm.redirectionUrl);
        if (window.my)
        {
            window.my.postMessage({'payResult': jsondata2});
        }
        
    };

    render(){
        return(
            <div className="App">
                <h2>Miniprogram Payment</h2>
                <div>
                    <label for="sel1">Fund</label>
                    <select>
                        <option>Select Fund:</option>
                        <option>Fund 1</option>
                        <option>Fund 2</option>
                        <option>Fund 3</option>
                        <option>Fund 4</option>
                    </select>
                </div>
                <div>
                    <label for="amount">Investment Amount</label>
                    <input type="number" value={this.state.payment} />
                </div>
                <div>
                    <button className ="btn btn-primary" onClick={this.handlePay}>Pay with E-Wallet</button>
                </div>

            </div>
        )
    }
}

export default Payment;