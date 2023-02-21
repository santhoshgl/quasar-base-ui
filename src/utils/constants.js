// Add constants to this file
export const FirebaseActionMode = Object.freeze({
  VERIFY_EMAIL: 'verifyEmail',
  RESET_PASSWORD: 'resetPassword'
});

export const FirebaseErrorCode = Object.freeze({
  EMAIL_IN_USE: 'auth/email-already-in-use',
  EMIAL_NOT_FOUND: 'auth/email-not-found',
  USER_NOT_FOUND: 'auth/user-not-found',
  USER_DISABLED: 'auth/user-disabled',
  EXPIRED_ACTION_CODE: 'auth/expired-action-code',
  INVALID_ACTION_CODE: 'auth/invalid-action-code',
  WRONG_PASSWORD: 'auth/wrong-password',
  TOO_MANY_REQUESTS: 'auth/too-many-requests'
});

export const paginationLimit = 10;
