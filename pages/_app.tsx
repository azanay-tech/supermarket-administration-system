import LogRocket from 'logrocket';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import tailwindConfig from '../tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';
import { bool } from '../utils';

const fullConfig = resolveConfig(tailwindConfig);

console.log(fullConfig);

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

        if (bool(process.env.NEXT_PUBLIC_SENTRY)) {
            Sentry.configureScope(scope => {
                scope.setExtra(
                    'Username',
                    process.env.NEXT_PUBLIC_APP_USER_ID || 'Anonymous'
                );
            });
        }
    }, []);

    return <Component {...pageProps} />;
};

export default MyApp;
