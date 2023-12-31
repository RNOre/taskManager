import './App.css'
import Header from "./components/Header/Header.tsx";
import DayPage from "./components/Pages/DayPage/DayPage.tsx";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage.tsx";
import WeekPage from "./components/Pages/WeekPage/WeekPage.tsx";
import MonthPage from "./components/Pages/MonthPage/MonthPage.tsx";
import VariableDatePage from "./components/Pages/VariableDatePage/VariableDatePage.tsx";
function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/main"} element={<MainPage/>}/>
                <Route path={"/day"} element={ <DayPage/>}/>
                <Route path={"/week"} element={ <WeekPage/>}/>
                <Route path={"/month"} element={ <MonthPage/>}/>
                <Route path={"/variable"} element={<VariableDatePage/>}/>
            </Routes>
        </>
    )
}

export default App;
