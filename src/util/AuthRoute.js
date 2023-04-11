import { useUserDataStore } from "../stores/userData";

const AuthRoute = (to, from) => {
	const userStore = useUserDataStore();
	if (!userStore.authenticated)
		return from;
};

export default AuthRoute;
