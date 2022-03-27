import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';


import './style/style.css'


/* const service= new Service();
	
service.getAllCakes().then(res=>{
	return res.forEach(element => {
		console.log(element.id);
	});
}); */

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);


