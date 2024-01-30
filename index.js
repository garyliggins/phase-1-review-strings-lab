// Write your code in this file!
// const currentUser = 'Grace Hopper';
// const welcomeMessage = 'Welcome to Flatbook, ';
const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//slicing the currentuser to get the first character
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
console.log(shortGreeting)