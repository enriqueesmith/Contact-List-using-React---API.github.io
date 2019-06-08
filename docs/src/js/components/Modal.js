import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from "../store/appContext.jsx";

class Modal extends React.Component{
	constructor(){
		super();
		this.state = {
				// Initialize your state
		};
	}
		
	render(){
		return (
			<Context.Consumer>
				{({ actions }) => {
					return (
						<div className="modal" tabIndex="-1" role="dialog" style={{display: (this.props.show) ? 'inline-block' : 'none'}}>
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Are you sure?</h5>
										{ (this.props.onClose) ?
											<button onClick={() => this.props.onClose()} type="button" className="close" data-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
												:''
										}
									</div>
									<div className="modal-body">
										<p>Warning: unknown consequences after this point... Kidding!</p>
									</div>		
									<div className="modal-footer">
										<button onClick={() => this.props.onClose()} type="button" className="btn btn-primary" data-dismiss="modal">Oh no!</button>
										<button onClick={() => 
											{
											this.props.onClose();
											actions.deleteContact(this.props.elephant);
											}}
											type="button" className="btn btn-secondary" data-dismiss="modal">Do it!
										</button>;
										
									</div>;
								</div>
							</div>
						</div>
				);}
				}
			</Context.Consumer>
		);
	}
		
}
/**
 * Define the data-types for
 * your component's properties
**/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	onDelete: PropTypes.number,
	show: PropTypes.bool,
	camel: PropTypes.number,
	elephant: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
**/
Modal.defaultProps = {
	show: false,
	onClose: null,
	onDelete: null
};
export default withRouter(Modal);