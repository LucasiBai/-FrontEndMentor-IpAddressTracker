import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import SearcherContainer from "./containers/SearcherContainer/SearcherContainer";

function App() {
	return (
		<BrowserRouter>
			<HeaderContainer />
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<SearcherContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
