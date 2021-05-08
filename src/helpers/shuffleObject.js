export const shuffleObject = (data) => {
  const shuffled = Object.entries(data).sort(() => {
    return Math.random() - 0.5;
  });

  console.log(shuffled);

  console.log(Object.fromEntries(shuffled));
  return Object.fromEntries(shuffled);
};
