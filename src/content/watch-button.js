import React from 'react';
import { Button } from 'react-bootstrap';
import { autobind } from 'core-decorators';

import '../vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import GoGoFetch from '../fetchers/gogoanime';


export class WatchButton extends React.Component {

	title;
	last_watched_episode;

	constructor(props) {
		super(props);
		
		this.title = null;
		this.last_watched_episode = null;
		
		this.state = {
			available: false
		};
	}
	
	@autobind
	extract_info() {
		let title_node = document.getElementsByClassName("h1")[0];
		this.title = title_node.getElementsByTagName('span')[0]
				      .innerText;
		let episode = document
			.getElementsByClassName('js-user-episode-seen')[0]
			.value;
		this.last_watched_episode = +episode;
	}

	@autobind
	handleClick() {
		GoGoFetch.open_episode(this.title, this.last_watched_episode + 1);
	}

	@autobind
	componentWillMount() {
		this.extract_info();
		GoGoFetch.anime_exists(this.title)
			.then( exists => this.setState({
						 available: exists
							}));
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

