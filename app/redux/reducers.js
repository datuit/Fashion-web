/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'Utils/history';
import languageProviderReducer from 'Containers/LanguageProvider/reducer';

import authUser from './authUser';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    authUser,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
