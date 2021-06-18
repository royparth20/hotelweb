const store = {
  isAvailable: () => {
    if (typeof localStorage !== "undefined") {
      try {
        localStorage.setItem("a", "a");
        localStorage.removeItem("a");
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  },
  getItem: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item;
      // if (item) return cryptr.decrypt(item);
      // else return null;
    } catch (error) {
      return null;
    }
  },
  removeItem: (key) => {
    try {
      return localStorage.removeItem(key);
    } catch (error) {
      return null;
    }
  },
  setItem: (key, value) => {
    try {
      // const item = cryptr.encrypt(value);
      // return localStorage.setItem(key, item);

      return localStorage.setItem(key, value);
    } catch (error) {
      return null;
    }
  },
};

export default store;
