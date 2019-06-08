const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
			/*	{
					name: 'Enrique Smith',
					address: '5842 Hillcrest Rd',
					phone: '(870) 288-4149',
					email: 'esmith@emails.com',
				},

				{
					name: 'Andres Fuentes',
					address: '374 Crest Rd',
					phone: '(754) 489-9874',
					email: 'afuentes@emails.com',
				},

				{
					name: 'Sean Combes',
					address: '4598 Hill Rd',
					phone: '(787) 256-1349',
					email: 'scombes@emails.com',
				},

				{
					name: 'Greg Pulitzer',
					address: '237 SW St',
					phone: '(870) 255-7596',
					email: 'gpulitzer@emails.com',
				} */
				]

		},

		actions: {

			addContact: e => {
			
			let full_name = e.target.nameInput.value;
			let address = e.target.addressInput.value;
			let phone = e.target.phoneInput.value;
			let email = e.target.emailInput.value;
				
			let	tempObject = 
				{full_name: full_name , 
				agenda_slug: "alejo",
				address: address , 
				phone: phone , 
				email: email};
			
			fetch(
			"https://assets.breatheco.de/apis/fake/contact/",{
			
			method: 'POST',
			body: JSON.stringify(tempObject),
			headers:{
				'Content-Type': 'application/json'
			}})
			
			.then(res => {
				return res.text();
				})
			.then(response => {
				//console.log("Success:", typeof response);
				//	console.log(response);
				let newValues =	getStore();
				//console.log(newValues);
				newValues.contacts.push(tempObject);
				setStore({contacts: newValues.contacts});
			})

			.catch(error => console.error("Error:", error));
			
			
			},	
			
			deleteContact: e => {
				//console.log(getState);
			fetch(
			"https://assets.breatheco.de/apis/fake/contact/"+e,{
			
			method: 'DELETE'
				
			})
			
			.then(res => {
				return res.text();
				})
			.then(response => {
				let deleteArrayValue = getStore();
				let other = deleteArrayValue.contacts.filter((shower) => {
					return shower.id !== e;
					});
				setStore({contacts: other});
			})

			.catch(error => console.error("Error:", error));
			console.log(e);
			
			},
			
			getDatData: () => {
			fetch(
			"https://assets.breatheco.de/apis/fake/contact/agenda/alejo"
			)
			.then(res => res.json())
			.then(response => {
				//console.log("Success:", typeof response);
				//	console.log(response);
				if (typeof response === typeof []) {
					setStore({ contacts: response });
					
					//console.log(this.state);
				} else {
					setStore({ contacts: [] });
				}
			})

			.catch(error => console.error("Error:", error));
			}	
		}
	};
};

export default getState;


			/*
			addToContacts: (name, email, phone, address) => {
				var tempStore = getStore();
				var newContact = {
						name,
						email,
						phone,
						address
				};
				tempStore.contacts.push(newContact);
				setStore({ tempStore });
			},

			
			editContacts: (theid) => {
				if(typeof theid !== "undefined"){
					store.contacts[theid]
				} else {

				}
			},
			

			
			deleteContacts: (e) => {
				var tempStore = getStore();
				tempStore.contacts.splice(e, 1);
				setStore({ tempStore });
			}
			*/