export const setLS = (item, minutes) => {
  localStorage.setItem(item, minutes);
  return minutes;
}

export const getLS = (item) => (
  Number( localStorage.getItem(item) )
);

export const clearLS = () => (
  localStorage.clear()
);
