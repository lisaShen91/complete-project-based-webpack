import routes from './router';
import {App} from 'kpc/components/app';
import {Router} from 'director/build/director';

window.app = new App({
	container: document.querySelector('.ctrl-main-container')
});

let router = new Router(routes);

router.init('/');

if (module.hot) {
	module.hot.accept('./router', () => {
		const routes = require('./router').default;
		router.destroy();
		router = new Router(routes);
		router.init('/');
	})
}