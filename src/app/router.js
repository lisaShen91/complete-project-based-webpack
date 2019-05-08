const routes = {
	'/': async () => {
		app.load((await import('../pages/list')).default);
	},
};

export default routes;