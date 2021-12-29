import "../styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Provider} from 'react-redux'
import {store} from "../app/store";
import BaseApp from "../components/base/BaseApp";

export default function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <BaseApp>
                <Component {...pageProps} />
            </BaseApp>
        </Provider>
    )
}
