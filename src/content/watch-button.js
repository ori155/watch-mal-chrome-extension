import React from 'react';
import { Button } from 'react-bootstrap';
import '../vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css';

let request_init = {
	credentials: 'include',
	cors: 'cors'
	};
let base_url = 'https://gogoanime.io/';
let url = base_url + 'search.html?keyword=';

function extract_anime_data(page_text) {
	let reg = /<p class="name">[\s]*<a href="([^"]+)" title="([^"]+)"/;
	let [_, url, title] = reg.exec(page_text);
	let insite_name = /\/category\/([^/]+)/.exec(url)[1];
	return {url, title, insite_name};
}

function get_anime_data(search_url) {
	return fetch(search_url, request_init)
		.then(res => res.text())
		.then( text => extract_anime_data(text));
}


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
		get_anime_data(url + encodeURIComponent(title))
			.then(anime => {
				console.log(anime.title + ' '
					+ anime.url +
					' insite: ' + anime.insite_name);
				window.open(
				base_url.replace('https', 'http') +
				anime.insite_name +
					'-episode-' + 1, '_blank');
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

