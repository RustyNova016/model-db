import '../styles/global.scss'
import type {AppProps} from 'next/app'
import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
    </>
}

export default MyApp
