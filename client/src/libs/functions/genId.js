export const generateUniqueId = () => {
  // const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

  const characters = numbers;
  // const characters = alphabet + numbers;

  let id = "";
  for (let i = 0; i < 21; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
};
