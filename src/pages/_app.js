import "slick-carousel/slick/slick.css";
import '../components/css/contact.css'
import '../components/css/checkout.css';
import "../components/css/Main.css";
import "../components/css/head.css"
import "../components/css/footer.css";
import "../components/css/cart.css";
import "../components/css/card.css"
import "../components/css/about.css";
import '../components/css/Details.css' ;
import "../components/css/nav.css";
import "../components/css/store.css";
import "../components/Hooks/Loading.css";
import '../components/css/Details.css'
import '../components/css/logs.css'
import './page.module.css'


import "slick-carousel/slick/slick-theme.css";
import { SidebarProvider } from "../components/Hooks/context-sidebar";
import './page.module.css';
import './globals.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store/store'
import { ResultProvider } from "../components/Hooks/shippingContext";
import { SessionProvider } from "next-auth/react";
import { LogsProvider } from "@/components/Hooks/context-login";


function App({ Component, pageProps }) {
    return (
        
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SessionProvider session={pageProps.session}>
                    <LogsProvider>
                        <SidebarProvider>
                            <ResultProvider>
                                <Component {...pageProps} /> 
                            </ResultProvider>
                        </SidebarProvider>
                    </LogsProvider>
                </SessionProvider>
            </PersistGate>            
            </Provider>
    );
}

export default App;
