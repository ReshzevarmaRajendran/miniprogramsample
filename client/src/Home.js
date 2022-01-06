import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
        <div className="App">
			<h2> Sample Mini Program Form!!</h2>
            <div>
                <label for ="name">Name</label>
                <input type="text" name="name"  id="name" className="form-control"/>
            </div>

            <div>
                <label for ="phone">Phone Number</label>
                <input type="text" name="phone"  id="phone" className="form-control"/>
            </div>

            <div>
                <label for ="email">Email</label>
                <input type="text" name="email"  id="email" className="form-control"/>
            </div>

            <div>
					<label for="dob">Date of Birth</label>
					<input type="text" className="form-control" id="dob" name="dob"  />
			</div>
            <div>
                    <br/>
					<button className="btn btn-primary" >Next</button>
            </div>
		</div>
    );
  }
}

export default Home;