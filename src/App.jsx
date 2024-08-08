import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from "./StartPage/StartPage.jsx";
import VisitCard from "./VisitCard/VisitCard.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/public-page" element={<StartPage/>}/>
                <Route path="/public-page/user/:id" element={<VisitCard/>}/>
            </Routes>
        </Router>
    );
}

export default App
