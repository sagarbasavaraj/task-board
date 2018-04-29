import database from '../firebase/firebase';

export const addTask = (uid, task) =>
  database.ref(`users/${uid}/tasks`).push(task);
