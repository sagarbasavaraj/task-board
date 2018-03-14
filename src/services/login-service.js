import { firebase } from '../firebase/firebase';

export const createUserWithEmailAndPassword = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return firebase.auth().signOut();
};
