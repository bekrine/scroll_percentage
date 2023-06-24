export const calculatPercentage = (
  componentHieght,
  currentPosition,
  setPercentage
) => {
  const percentage =
    (parseInt(currentPosition) * 100) / parseInt(componentHieght);
  setPercentage(Math.floor(percentage));
};
