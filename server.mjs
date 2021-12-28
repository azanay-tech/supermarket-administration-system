// eslint-disable-next-line import/extensions
import { nextStart } from 'next/dist/cli/next-start.js';

const PORT = process.env.AZANAY_TECH_SAS_CLIENT_PORT || 3001;
const HOST = process.env.AZANAY_TECH_SAS_CLIENT_HOST || 'localhost';

nextStart(['--port', PORT, '--hostname', HOST]);
