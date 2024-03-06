//////////// LocalStorage Token Utilities ////////////////
// getToken
export const getToken = () => {
  const token = localStorage.getItem("APP-token");
  return token;
};
// setToken
export const setToken = (token) => {
  if (token) {
    localStorage.setItem("APP-token", token);
  } else {
    // need to generate the 30 charset length for generating token
    localStorage.setItem("APP-token", generateToken(30));
  }
};
// remove Token
export const removeToken = () => {
  localStorage.removeItem("APP-token");
};

////////// Theme Utility //////////////
// export const setTheme = () => {
//   const currentTheme = localStorage.getItem("Theme");
//   const themes = ["system", "dark", "light"];
//   const currentIndex = themes.indexOf(currentTheme);
//   const nextIndex = (currentIndex + 1) % themes.length;
//   const nextTheme = themes[nextIndex];
//   localStorage.setItem("Theme", nextTheme);
//   return nextTheme;
// };
// export const getTheme = () => {
//   const theme = localStorage.getItem("Theme");
//   console.log("giving theme ", theme);
//   return theme;
// };

////////// Generate Token Using Random Charset //////////////
export const generateToken = (length) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let token = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    token += charset.charAt(randomIndex);
  }
  return token;
};
