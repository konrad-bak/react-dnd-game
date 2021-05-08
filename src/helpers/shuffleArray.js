export const shuffleArray = (data) => {
  return [...data].sort(() => {
    return Math.random() - 0.5;
  });
};
