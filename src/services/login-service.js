import database from '../firebase/firebase';

export const signup = userInfo => {
  return database.ref().set(userInfo);
};
