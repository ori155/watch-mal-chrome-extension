import React from 'react';
import { Button } from 'react-bootstrap';
import { autobind } from 'core-decorators';

import '../vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import GoGoFetch from '../fetchers/gogoanime';


export class WatchButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			available: true
		};
	}
	@autobind
	handleClick() {
		let title_node = document.getElementsByClassName("h1")[0];
		let title = title_node.getElementsByTagName('span')[0]
				      .innerText;
		let episode = document
			.getElementsByClassName('js-user-episode-seen')[0]
			.value;
		episode = +episode;
		GoGoFetch.open_episode(title, episode + 1);
	}
	render() {
		return (
		    <Button
		    bsStyle="success"
		    disabled={!this.state.available}
		    onClick={this.handleClick}>
		    	GoGoAnime
		    </Button>
		    );
	}
}

