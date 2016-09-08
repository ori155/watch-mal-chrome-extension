import React from 'react';
import { Button } from 'react-bootstrap';
import '../vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css';


let request_init = {
	credentials: 'include',
	cors: 'cors'
	};
let url = 'https://gogoanime.io/';

export class WatchButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			available: false
		};
	}
	handleClick = () => {
		fetch(url, request_init)
		.then(res => {
			console.log(
				'same-origin, cors! recived responce ' +
				'from ' + res.url +
				'\nres is ' + res.status);
			});
	}
	render() {
		return (
		    <Button
		    bsStyle="success"
		    disabled={this.state.available}
		    onClick={this.handleClick}>
		    	GoGoAnime
		    </Button>
		    );
	}
}

