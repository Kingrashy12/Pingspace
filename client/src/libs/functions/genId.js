export const generateUniqueId = () => {
  const id = `toast_${Math.random().toString(36).substr(2, 9)}`;
  return id;
};
