import {Route, Routes} from "react-router-dom";
import {HomePage} from "../Page/HomePage";
import {SearchPage} from "../Page/searchPage";

export function AppRouter() {
    return(
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/search"} element={<SearchPage/>}/>
        </Routes>
    )
}