const useMiddlewares = (app, middlewares) => {
	for (const middleware of middlewares) {
		app.use(middleware);
	}
};

const useRouters = (app, routers) => {
	for (const [path, router] of Object.entries(routers)) app.use(path, router);
};

export { useMiddlewares, useRouters };
