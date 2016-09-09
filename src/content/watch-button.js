import React from 'react';
import { Button } from 'react-bootstrap';

import '../vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import GoGoFetch from '../fetchers/gogoanime';


export class WatchButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			available: false
		};
	}
	handleClick = () => {
		let title_node = document.getElementsByClassName("h1")[0];
		let title = title_node.getElementsByTagName('span')[0]
				      .innerText;
		GoGoFetch.open_episode(title, 3);
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

