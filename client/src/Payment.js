import React, {Component} from 'react';

class Payment extends Component{
    constructor(){
        super();
        this.state ={
            response:'',
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
                <p>{this.state.response}</p>
                <form>
                <div>
                    <label for="amount">Investment Amount</label>
                    <input type="number" value={this.state.payment} size="10" required onChange={e => this.setState({ payment: e.target.value })} />
                </div>
                <div>
                    <button className ="btn btn-primary" onClick={this.handlePay}>Pay</button>
                </div>
                <div>
                    <p>Pay Result: {this.state.responsePay}</p>
                    <p><a href={this.state.responsePayUrl} target='_blank' rel="noreferrer">{this.state.responsePayUrl}</a></p>
                </div>

                </form>
               

            </div>
        )
    }
}

export default Payment;