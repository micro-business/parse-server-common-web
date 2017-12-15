// @flow

import Parse from 'parse';

export { BaseObject } from './schema';
export { ParseWrapperService, UserService } from './services';
export { watchGetCurrentUser, watchSignUpWithUsernameAndPassword, watchSignInWithUsernameAndPassword, watchSignOut } from './userAccess';

export const configParseServerSdk = (serverUrl: string, applicationId: string, javascriptKey: string) => {
  Parse.initialize(applicationId, javascriptKey);
  Parse.serverURL = serverUrl;
};
