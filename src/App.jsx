import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StartPage from "./StartPage/StartPage.jsx";
import VisitCard from "./VisitCard/VisitCard.jsx";

function App() {
    return (
        <Router basename={'public-page'}>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/user/:uuid" element={<VisitCard/>}/>
            </Routes>
        </Router>
    );
}

export default App
