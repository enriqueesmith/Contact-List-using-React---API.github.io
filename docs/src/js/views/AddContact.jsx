import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from 'prop-types';



export default class Contacts extends React.Component {
	constructor() {
		super();
		
		this.state={
			name: "",
			email: "",
			phone: "",
			address: ""
		};
		
	}
	
	handleClick() {
    alert('Contact saved successfully. Please click Get back to Contacts below.', this);
  }
	
	
	render(props) {
		return (
			<div className="container" id="mainForm">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<Context.Consumer>
						{({ store, actions }) => {
						
						let contact = store.contacts[this.props.match.params.theid] || { };
								return (
									<form onSubmit={(e) => {
										e.preventDefault();
										actions.addContact(e);
									}
									}>
										<div className="form-group">
											<label>Full Name</label>
											<input type="text" id="nameInput" className="form-control" placeholder={contact.full_name || "Full Name"} onChange={(e) => this.setState({ full_name: e.target.value })} value={this.state.full_name} />
										</div>
										<div className="form-group">
											<label>Email</label>
											<input type="email" id="emailInput" className="form-control" placeholder={contact.email || "Enter email"} onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} />
										</div>
										<div className="form-group">
											<label>Phone</label>
											<input type="phone" id="phoneInput" className="form-control" placeholder={contact.phone || "Enter phone"}  onChange={(e) => this.setState({ phone: e.target.value })} value={this.state.phone} />
										</div>
										<div className="form-group">
											<label>Address</label>
											<input type="text" id="addressInput" className="form-control" placeholder={contact.address || "Enter address"}  onChange={(e) => this.setState({ address: e.target.value })} value={this.state.address} />
										</div>
										<button type="submit" onClick={this.handleClick} className="btn btn-primary form-control">Save</button>
										<Link className="mt-3 w-100 text-center" to="/">Get back to Contacts</Link>
									</form>
								);
							}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

Contacts.propTypes = {
		match: PropTypes.object
}; 
