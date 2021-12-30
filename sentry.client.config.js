/**
 * This file configures the initialization of Sentry on the browser.
 * The config you add here will be used whenever a page is visited.
 * https://docs.sentry.io/platforms/javascript/guides/nextjs/
 */

import * as Sentry from '@sentry/nextjs';
import LogRocket from 'logrocket';
import { bool } from './utils';

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (bool(process.env.NEXT_PUBLIC_SENTRY)) {
    Sentry.init({
        dsn: SENTRY_DSN,
        /* Adjust this value in production, or use tracesSampler for greater control */
        tracesSampleRate: 1.0,
        environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'undefined-env',
        /**
         * Note: if you want to override the automatic release value, do not set a
         * `release` value here - use the environment variable `SENTRY_RELEASE`, so
         * that it will also get attached to your source maps
         */
    });
}

if (bool(process.env.NEXT_PUBLIC_LOGROCKET)) {
    LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_ID);

    LogRocket.getSessionURL(sessionURL => {
        if (bool(process.env.NEXT_PUBLIC_SENTRY)) {
            Sentry.configureScope(scope => {
                scope.setExtra('🚀 LogRocket', sessionURL);
            });
        }
    });
}
