import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import AdBlockDetectContainer from "./containers/AdBlockDetectContainer/AdBlockDetectContainer";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import SearcherContainer from "./containers/SearcherContainer/SearcherContainer";

function App() {
	return (
		<AdBlockDetectContainer>
			<BrowserRouter>
				<HeaderContainer />
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<SearcherContainer />} />
				</Routes>
			</BrowserRouter>
		</AdBlockDetectContainer>
	);
}

export default App;
