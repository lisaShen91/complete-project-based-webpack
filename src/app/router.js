const routes = {
	'/': async () => {
		app.load((await import('../pages/list')).default);
	},
	'/test': async (id) => {
		app.load((await import('../pages/detail')).default, {id});
	}
};

export default routes;