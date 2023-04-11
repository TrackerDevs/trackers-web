import { useUserDataStore } from "../stores/userData";

const UnAuthRoute = (to, from) => {
	const userStore = useUserDataStore();
	if (userStore.authenticated)
		return from;
};

export default UnAuthRoute;
