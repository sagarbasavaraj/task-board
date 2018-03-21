export const resolveSignUpError = ({ code }) => {
  switch (code) {
    case 'auth/email-already-in-use': {
      return {
        email: 'login:emailInUse'
      };
    }
    case 'auth/invalid-email': {
      return {
        email: 'login:invalidEmail'
      };
    }
    case 'auth/weak-password': {
      return {
        password: 'login:weakPassword'
      };
    }
    default:
      return null;
  }
};

export const resolveSignInError = ({ code }) => {
  switch (code) {
    case 'auth/user-not-found': {
      return {
        email: 'login:userNotFound'
      };
    }
    case 'auth/invalid-email': {
      return {
        email: 'login:invalidEmail'
      };
    }
    case 'auth/wrong-password': {
      return {
        password: 'login:wrongPassword'
      };
    }
    default:
      return null;
  }
};
