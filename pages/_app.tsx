import '../styles/global.scss'
import type {AppProps} from 'next/app'
import {QueryClient} from "react-query";
import {SessionProvider} from "next-auth/react";

const queryClient = new QueryClient();

//dotenv.config({path: path.resolve(__dirname, "../config/config.env")});

function MyApp({Component, pageProps}: AppProps) {
    return <>

        <SessionProvider session={pageProps.session} refetchInterval={0}>
            <Component {...pageProps} />
        </SessionProvider>
    </>
}

export default MyApp
