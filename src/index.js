// @flow

import Parse from 'parse/react-native';

export { BaseObject } from './schema';
export { ParseWrapperService, UserService } from './services';
export {
  ActionTypes as UserAccessActionTypes,
  UserAccessReducer,
  Status as UserAccessStatus,
  watchGetCurrentUser,
  watchSignUpWithUsernameAndPassword,
  watchSignInWithUsernameAndPassword,
  watchSignOut,
} from './userAccess';

export const configParseServerSdk = (serverUrl: string, applicationId: string, javascriptKey: string) => {
  Parse.initialize(applicationId, javascriptKey);
  Parse.serverURL = serverUrl;
};
