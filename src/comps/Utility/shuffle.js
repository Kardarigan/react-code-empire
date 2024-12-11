export const shuffle = (array, size) => {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, size);
};
