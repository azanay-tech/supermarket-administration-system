import LogRocket from 'logrocket';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import { bool } from '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        if (bool(process.env.NEXT_PUBLIC_LOGROCKET)) {
            /**
             * @TODO:
             * Obtain userId from session() rather than from enviroment variable
             * Make useEffect depend on useSession
             */
            const userId: string =
                process.env.NEXT_PUBLIC_APP_USER_ID || 'Anonymous';

            LogRocket.identify(userId, {
                clientId:
                    process.env.NEXT_PUBLIC_CLIENT_ID || 'unknown-customer',
                subscriptionType:
                    process.env.NEXT_PUBLIC_SUBSCRIPTION_TYPE ||
                    'unknown-subscription-type',
            });
        }
    }, []);

    return <Component {...pageProps} />;
};

export default MyApp;
