import React, { Component } from 'react';
import leadApi from "../../util/leadApi";
import './Landing.css';
class LandingPage extends Component{

	saveLead = (e) =>{
		e.preventDefault();
		const d = new Date();
		const timeStamp = d.getTime();
		leadApi.saveLead({
			firstName: document.getElementById("firstName").value,
			lastName: document.getElementById("lastName").value,
			street: document.getElementById("inputAddress").value,
			city: document.getElementById("inputCity").value,
			state: document.getElementById("inputState").value,
			zip: document.getElementById("inputZip").value,
			propertyValue: document.getElementById("inputPV").value,
			loanAmount: document.getElementById("inputLB").value,
			phone: document.getElementById("inputPhone").value,
			email: document.getElementById("inputEmail").value,
			timeStamp: timeStamp
	});
	}
render() {
	return (

		<div className="card card-center">

	<div className="card-body">

		<h1>Compare Morgages Today using Advance Blockchain Technology!</h1>
		<br/>
		<form className="form">
						<div className="row">
							<div className="form-group col-md-4 offset-md-2">
					
								<input type="text" className="form-control" id="firstName" placeholder="First Name" />
							</div>
							<div className="form-group col-md-4">
						
								<input type="text" className="form-control" id="lastName" placeholder="Last Name" />
							</div>
						</div>
						<div className="row">
							<div className="form-group col-md-8 offset-md-2">
								<input type="text" className="form-control" id="inputAddress" placeholder="Address" />
							</div>
						</div>
						<div className="row">
							<div className="form-group col-md-3 offset-md-2">
								<input type="text" className="form-control" id="inputCity" placeholder="City" />
							</div>
							<div className="form-group col-md-2 ">
								<select id="inputState" className="form-control">
									<option selected>State</option>
									<option value="AL">AL</option>
									<option value="AK">AK</option>
									<option value="AR">AR</option>
									<option value="AZ">AZ</option>
									<option value="CA">CA</option>
									<option value="CO">CO</option>
									<option value="CT">CT</option>
									<option value="DC">DC</option>
									<option value="DE">DE</option>
									<option value="FL">FL</option>
									<option value="GA">GA</option>
									<option value="HI">HI</option>
									<option value="IA">IA</option>
									<option value="ID">ID</option>
									<option value="IL">IL</option>
									<option value="IN">IN</option>
									<option value="KS">KS</option>
									<option value="KY">KY</option>
									<option value="LA">LA</option>
									<option value="MA">MA</option>
									<option value="MD">MD</option>
									<option value="ME">ME</option>
									<option value="MI">MI</option>
									<option value="MN">MN</option>
									<option value="MO">MO</option>
									<option value="MS">MS</option>
									<option value="MT">MT</option>
									<option value="NC">NC</option>
									<option value="NE">NE</option>
									<option value="NH">NH</option>
									<option value="NJ">NJ</option>
									<option value="NM">NM</option>
									<option value="NV">NV</option>
									<option value="NY">NY</option>
									<option value="ND">ND</option>
									<option value="OH">OH</option>
									<option value="OK">OK</option>
									<option value="OR">OR</option>
									<option value="PA">PA</option>
									<option value="RI">RI</option>
									<option value="SC">SC</option>
									<option value="SD">SD</option>
									<option value="TN">TN</option>
									<option value="TX">TX</option>
									<option value="UT">UT</option>
									<option value="VT">VT</option>
									<option value="VA">VA</option>
									<option value="WA">WA</option>
									<option value="WI">WI</option>
									<option value="WV">WV</option>
									<option value="WY">WY</option>
								</select>
							</div>
							<div className="form-group col-md-3 ">
								<input type="text" className="form-control" id="inputZip" placeholder="Zip Code" />
							</div>
						</div>
						<div className="row">
							<div className="form-group col-md-4 offset-md-2">
								<select id="inputPV" className="form-control" >
									<option value="Property Value" selected="selected" class="">Property Value</option>
									<option value="$0-$10,000" class="">$0-$10,000</option>
									<option value="$10,001-$20,000" class="">$10,001-$20,000</option>
									<option value="$20,001-$30,000" class="">$20,001-$30,000</option>
									<option value="$30,001-$40,000" class="">$30,001-$40,000</option>
									<option value="$40,001-$50,000" class="">$40,001-$50,000</option>
									<option value="$50,001-$60,000" class="">$50,001-$60,000</option>
									<option value="$60,001-$70,000" class="">$60,001-$70,000</option>
									<option value="$70,001-$80,000" class="">$70,001-$80,000</option>
									<option value="$80,001-$90,000" class="">$80,001-$90,000</option>
									<option value="90,001-$100,000" class="">90,001-$100,000</option>
									<option value="$100,001-$110,000" class="">$100,001-$110,000</option>
									<option value="$110,001-$120,000" class="">$110,001-$120,000</option>
									<option value="$120,001-$130,000" class="">$120,001-$130,000</option>
									<option value="$130,001-$140,000" class="">$130,001-$140,000</option>
									<option value="$140,001-$150,000" class="">$140,001-$150,000</option>
									<option value="$150,001-$160,000" class="">$150,001-$160,000</option>
									<option value="$160,001-$170,000" class="">$160,001-$170,000</option>
									<option value="$170,001-$180,000" class="">$170,001-$180,000</option>
									<option value="$180,001-$190,000" class="">$180,001-$190,000</option>
									<option value="$190,001-$200,000" class="">$190,001-$200,000</option>
									<option value="$200,001-$210,000" class="">$200,001-$210,000</option>
									<option value="$210,001-$220,000" class="">$210,001-$220,000</option>
									<option value="$220,001-$230,000" class="">$220,001-$230,000</option>
									<option value="$230,001-$240,000" class="">$230,001-$240,000</option>
									<option value="$240,001-$250,000" class="">$240,001-$250,000</option>
									<option value="$250,001-$260,000" class="">$250,001-$260,000</option>
									<option value="$260,001-$270,000" class="">$260,001-$270,000</option>
									<option value="$270,001-$280,000" class="">$270,001-$280,000</option>
									<option value="$280,001-$290,000" class="">$280,001-$290,000</option>
									<option value="$290,001-$300,000" class="">$290,001-$300,000</option>
									<option value="$300,001-$310,000" class="">$300,001-$310,000</option>
									<option value="$310,001-$320,000" class="">$310,001-$320,000</option>
									<option value="$320,001-$330,000" class="">$320,001-$330,000</option>
									<option value="$330,001-$340,000" class="">$330,001-$340,000</option>
									<option value="$340,001-$350,000" class="">$340,001-$350,000</option>
									<option value="$350,001-$360,000" class="">$350,001-$360,000</option>
									<option value="$360,001-$370,000" class="">$360,001-$370,000</option>
									<option value="$370,001-$380,000" class="">$370,001-$380,000</option>
									<option value="$380,001-$390,000" class="">$380,001-$390,000</option>
									<option value="$390,001-$400,000" class="">$390,001-$400,000</option>
									<option value="$400,001-$410,000" class="">$400,001-$410,000</option>
									<option value="$410,001-$420,000" class="">$410,001-$420,000</option>
									<option value="$420,001-$430,000" class="">$420,001-$430,000</option>
									<option value="$430,001-$440,000" class="">$430,001-$440,000</option>
									<option value="$440,001-$450,000" class="">$440,001-$450,000</option>
									<option value="$450,001-$460,000" class="">$450,001-$460,000</option>
									<option value="$460,001-$470,000" class="">$460,001-$470,000</option>
									<option value="$470,001-$480,000" class="">$470,001-$480,000</option>
									<option value="$480,001-$490,000" class="">$480,001-$490,000</option>
									<option value="$490,001-$500,000" class="">$490,001-$500,000</option>
									<option value="$500,001-$510,000" class="">$500,001-$510,000</option>
									<option value="$510,001-$520,000" class="">$510,001-$520,000</option>
									<option value="$520,001-$530,000" class="">$520,001-$530,000</option>
									<option value="$530,001-$540,000" class="">$530,001-$540,000</option>
									<option value="$540,001-$550,000" class="">$540,001-$550,000</option>
									<option value="$550,001-$560,000" class="">$550,001-$560,000</option>
									<option value="$560,001-$570,000" class="">$560,001-$570,000</option>
									<option value="$570,001-$580,000" class="">$570,001-$580,000</option>
									<option value="$580,001-$590,000" class="">$580,001-$590,000</option>
									<option value="$590,001-$600,000" class="">$590,001-$600,000</option>
									<option value="$600,001-$610,000" class="">$600,001-$610,000</option>
									<option value="$610,001-$620,000" class="">$610,001-$620,000</option>
									<option value="$620,001-$630,000" class="">$620,001-$630,000</option>
									<option value="$630,001 or more" class="">$630,001 or more</option>
								</select>
							</div>
							<div className="form-group col-md-4">
								<select id="inputLB" className="form-control">
									<option value="Loan Balance" selected="selected" class="">Loan Balance</option>
									<option value="$0-$10,000" class="">$0-$10,000</option>
									<option value="$10,001-$20,000" class="">$10,001-$20,000</option>
									<option value="$20,001-$30,000" class="">$20,001-$30,000</option>
									<option value="$30,001-$40,000" class="">$30,001-$40,000</option>
									<option value="$40,001-$50,000" class="">$40,001-$50,000</option>
									<option value="$50,001-$60,000" class="">$50,001-$60,000</option>
									<option value="$60,001-$70,000" class="">$60,001-$70,000</option>
									<option value="$70,001-$80,000" class="">$70,001-$80,000</option>
									<option value="$80,001-$90,000" class="">$80,001-$90,000</option>
									<option value="90,001-$100,000" class="">90,001-$100,000</option>
									<option value="$100,001-$110,000" class="">$100,001-$110,000</option>
									<option value="$110,001-$120,000" class="">$110,001-$120,000</option>
									<option value="$120,001-$130,000" class="">$120,001-$130,000</option>
									<option value="$130,001-$140,000" class="">$130,001-$140,000</option>
									<option value="$140,001-$150,000" class="">$140,001-$150,000</option>
									<option value="$150,001-$160,000" class="">$150,001-$160,000</option>
									<option value="$160,001-$170,000" class="">$160,001-$170,000</option>
									<option value="$170,001-$180,000" class="">$170,001-$180,000</option>
									<option value="$180,001-$190,000" class="">$180,001-$190,000</option>
									<option value="$190,001-$200,000" class="">$190,001-$200,000</option>
									<option value="$200,001-$210,000" class="">$200,001-$210,000</option>
									<option value="$210,001-$220,000" class="">$210,001-$220,000</option>
									<option value="$220,001-$230,000" class="">$220,001-$230,000</option>
									<option value="$230,001-$240,000" class="">$230,001-$240,000</option>
									<option value="$240,001-$250,000" class="">$240,001-$250,000</option>
									<option value="$250,001-$260,000" class="">$250,001-$260,000</option>
									<option value="$260,001-$270,000" class="">$260,001-$270,000</option>
									<option value="$270,001-$280,000" class="">$270,001-$280,000</option>
									<option value="$280,001-$290,000" class="">$280,001-$290,000</option>
									<option value="$290,001-$300,000" class="">$290,001-$300,000</option>
									<option value="$300,001-$310,000" class="">$300,001-$310,000</option>
									<option value="$310,001-$320,000" class="">$310,001-$320,000</option>
									<option value="$320,001-$330,000" class="">$320,001-$330,000</option>
									<option value="$330,001-$340,000" class="">$330,001-$340,000</option>
									<option value="$340,001-$350,000" class="">$340,001-$350,000</option>
									<option value="$350,001-$360,000" class="">$350,001-$360,000</option>
									<option value="$360,001-$370,000" class="">$360,001-$370,000</option>
									<option value="$370,001-$380,000" class="">$370,001-$380,000</option>
									<option value="$380,001-$390,000" class="">$380,001-$390,000</option>
									<option value="$390,001-$400,000" class="">$390,001-$400,000</option>
									<option value="$400,001-$410,000" class="">$400,001-$410,000</option>
									<option value="$410,001-$420,000" class="">$410,001-$420,000</option>
									<option value="$420,001-$430,000" class="">$420,001-$430,000</option>
									<option value="$430,001-$440,000" class="">$430,001-$440,000</option>
									<option value="$440,001-$450,000" class="">$440,001-$450,000</option>
									<option value="$450,001-$460,000" class="">$450,001-$460,000</option>
									<option value="$460,001-$470,000" class="">$460,001-$470,000</option>
									<option value="$470,001-$480,000" class="">$470,001-$480,000</option>
									<option value="$480,001-$490,000" class="">$480,001-$490,000</option>
									<option value="$490,001-$500,000" class="">$490,001-$500,000</option>
									<option value="$500,001-$510,000" class="">$500,001-$510,000</option>
									<option value="$510,001-$520,000" class="">$510,001-$520,000</option>
									<option value="$520,001-$530,000" class="">$520,001-$530,000</option>
									<option value="$530,001-$540,000" class="">$530,001-$540,000</option>
									<option value="$540,001-$550,000" class="">$540,001-$550,000</option>
									<option value="$550,001-$560,000" class="">$550,001-$560,000</option>
									<option value="$560,001-$570,000" class="">$560,001-$570,000</option>
									<option value="$570,001-$580,000" class="">$570,001-$580,000</option>
									<option value="$580,001-$590,000" class="">$580,001-$590,000</option>
									<option value="$590,001-$600,000" class="">$590,001-$600,000</option>
									<option value="$600,001-$610,000" class="">$600,001-$610,000</option>
									<option value="$610,001-$620,000" class="">$610,001-$620,000</option>
									<option value="$620,001-$630,000" class="">$620,001-$630,000</option>
									<option value="$630,001 or more" class="">$630,001 or more</option>
								</select>
							</div>
						</div>
						<div className="row">
							<div className="form-group col-md-4 offset-md-2">
								<input type="text" className="form-control" id="inputPhone" placeholder="Phone" />
							</div>
							<div className="form-group col-md-4">
								<input type="text" className="form-control" id="inputEmail" placeholder="Email" />
							</div>
						</div>
						<br />
						<center>
						<button type="submit" onClick={e => this.saveLead(e)}	className="btn btn-primary">Compare Quotes!</button>
						</center>
				</form>
			</div>
	 </div>

	)
}
}
export default LandingPage;