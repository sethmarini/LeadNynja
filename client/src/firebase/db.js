import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email, state) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    state
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other db APIs ...
