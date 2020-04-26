/**
 * Asynchronously loads the component for HomePage
 */

import loadable from 'Utils/loadable';

export default loadable(() => import('./index'));
