import "client-only";

// can store in local storage
export function getLocalStorage(key, defaultValue) {
  const stickyValue = localStorage.getItem(key);

  return stickyValue !== null && stickyValue !== "undefined"
    ? JSON.parse(stickyValue)
    : defaultValue;
}

// can get out of local storage
export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
