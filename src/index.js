import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import './style/style.css'


/* const service= new Service();
	
service.getCake(1).then(res=>console.log(res.name)); */

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);


