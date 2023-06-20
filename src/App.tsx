import './App.css'
import Header from "./components/Header/Header.tsx";
import {useTypedSelector} from "./hooks/useTypedSelector.ts";
import {useEffect, useState} from "react";
import DayPage from "./components/Pages/DayPage/DayPage.tsx";
function App() {

    const [loading, setLoading] = useState(true);

    useEffect(()=> {
                setTimeout(() => {
                    setLoading(false)}, 1000
                )
        },[loading]
    )

    const state = useTypedSelector(state=>state);
    console.log(state);

    return (
        <>
            <Header/>
            <DayPage/>
        </>
    )
}

export default App;
