import React from 'react';
import { Button } from 'react-bootstrap';
import '../vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css';

export class WatchButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		    <Button bsStyle="primary">bootstrap</Button>
		    );
	}
}

