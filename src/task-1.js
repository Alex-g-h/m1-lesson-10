const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104
  }
];

onlineUsers = [];
usersOnlineNames = '';

usersOnlineNames = getOnlineUsers(users, onlineUsers);

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


/**
 * Get online users only to result array and list of thier names
 * @param {*} allUsers All users (input array)
 * @param {*} onlineOnlyUsers Online only users (return array)
 * @returns Online only users name
 */
function getOnlineUsers(allUsers, onlineOnlyUsers) {
  onlineUsersNames = '';
  users.forEach(user => {
    if (user.status === 'online') {
      onlineOnlyUsers.push(user);
      onlineUsersNames += user.username + ', ';
    }
  })

  // remove last comma
  const lastCommaIndex = onlineUsersNames.lastIndexOf(',');
  if (lastCommaIndex !== -1)
    onlineUsersNames = onlineUsersNames.slice(0, lastCommaIndex);

  return onlineUsersNames;
}