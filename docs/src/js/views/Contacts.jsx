import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';

export default class Contacts extends React.Component {
	constructor(){
		super();
		this.state = {
			show: false,
				id: null
			
		};
		
	}
	
	
	handleDelete = (id) => {
		this.setState({
			show: true, 
			id: id
		});
		}
	render() {
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">Add new contact</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<Context.Consumer>
							{({ store }) => {
							return store.contacts.map((elem, index) => {
								return (
									<ContactCard 
										full_name={elem.full_name}
										address={elem.address}
										phone={elem.phone}
										email={elem.email}
										key={index}
										index={elem.id}
										onDelete={()=> this.handleDelete(elem.id)}
										/>
									); 
								});
							}}
						</Context.Consumer>
						
						<Modal show={this.state.show} elephant={this.state.id} onClose={() => this.setState({show: false})}/>
					</ul>
				</div>
			</div>
		</div>
		);
	}
}
