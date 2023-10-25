import { useUserDataStore } from "../stores/userData";

const AdminRoute = (to, from) => {
	const userStore = useUserDataStore();
	if (!userStore.authenticated || !userStore.user.credentials.admin || !userStore.user.credentials.admin.booleanValue)
		return from;
};

export default AdminRoute;
