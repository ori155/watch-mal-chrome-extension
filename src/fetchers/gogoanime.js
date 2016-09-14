
let request_init = {
	credentials: 'include',
	cors: 'cors'
	};

const base_url = 'https://gogoanime.io/';
const search_url = base_url + 'search.html?keyword=';

export default class GoGoFetch {
	static get_anime_data(name) {
		return this.search_anime(name)
			.then(res => res.text())
			.then( text => this.analyze_search_page(text));
	}
	static analyze_search_page(page_text) {
	let reg =
		/<p class="name">[\s]*<a href="([^"]+)" title="([^"]+)"/;
	let [_, url, title] = reg.exec(page_text);
	let insite_name = /\/category\/([^/]+)/.exec(url)[1];
	return {url, title, insite_name};
	}
	static search_anime(name) {
		return fetch(search_url + name, request_init);
	}
	static episode_url(anime, ep) {
		ep = +ep;
		return base_url.replace(/^https/, 'http') +
				anime.insite_name +
				'-episode-' + ep;
	}
	static open_episode(name, ep) {
		this.get_anime_data(name)
			.then( anime => {
				window.open(
				this.episode_url(anime, ep), '_blank');
			});
	}
	static anime_exists(name) {
		return this.get_anime_data(name)
			.then( resolved => true, error => false );
	}

}
