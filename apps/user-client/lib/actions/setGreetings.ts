export const getGreeting = () => {
  const time = new Date();
  const hour = time.getHours();
  if (hour > 0 && hour < 12) {
    return "Good Morning";
  }
  return "Good Evening";
};
