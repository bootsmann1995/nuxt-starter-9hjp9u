export default defineNuxtRouteMiddleware((middleware): any => {
	console.log("running global middleware", middleware);
});
