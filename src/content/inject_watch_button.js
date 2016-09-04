import React from 'react';
import ReactDOM from 'react-dom';

import { WatchButton } from './watch-button';


let sidebar_node = document.getElementsByClassName("js-scrollfix-bottom")[0];
let icons_div = document.getElementsByClassName("icon-block")[0];

let extension_div = sidebar_node.insertBefore(
			            document.createElement("div"), icons_div);

ReactDOM.render(<WatchButton />, extension_div);


