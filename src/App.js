import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";

function App() {
	const auth = useSelector((state) => state.auth.isAuthenticated);

	return (
		<Fragment>
			<Header />
			{auth ? <UserProfile /> : <Auth />}
			<Counter />
		</Fragment>
	);
}

export default App;
