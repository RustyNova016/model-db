import React from "react";
import "./App.css";
import {AppRouter} from "./components/AppRouter";
import {Navigation} from "./components/navbar/Navigation";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Navigation></Navigation>
                <AppRouter></AppRouter>
            </div>
            <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
    );
}

export default App;
