// lib/fakeDB.js
export const users = [];

export function getUserByEmail(email) {
  return users.find((user) => user.email === email);
}

export function createUser({ name, email, password }) {
  const user = {
    id: Date.now().toString(),
    name,
    email,
    password,
  };
  users.push(user);
  return user;
}
