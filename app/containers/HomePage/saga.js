/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  const username = '551ade522ee09431e5000015';
  const catalogCountry = en;
  const requestCountry = en;
  // const requestURL = `https://private-39bc73-bonusly.apiary-mock.com/api/v1/rewards?catalog_country=${catalogCountry}&request_country=${requestCountry}`;
  const requestURL = `https://bonus.ly/api/scim11/rewards?catalog_country=${catalogCountry}&request_country=${requestCountry}`;
  const headers = `
    x-apiary-id: 6d61d80a3968d91a01e5bbc84d6752bd,
  `;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, headers, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
}
