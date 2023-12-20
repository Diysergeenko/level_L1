import pluralize from "main.js";

const messages = 112;
const messageForms = ["сообщение", "сообщения", "сообщений"];
const messagesText = `${messages} ${pluralize(messages, messageForms)}`;

console.log(messagesText);

const users = 1026;
const userForms = ["пользователь", "пользователя", "пользователей"];
const usersText = `${users} ${pluralize(users, userForms)}`;

console.log(usersText);
