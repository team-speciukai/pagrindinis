/** @format */

// counter.js
export function incrementCount(itemId) {
  const countElement = document.getElementById(`count${itemId}`);
  let count = parseInt(countElement.textContent, 10);
  count += 1;
  countElement.textContent = count;
  updateLocalStorage(itemId, count);
}

export function decrementCount(itemId) {
  const countElement = document.getElementById(`count${itemId}`);
  let count = parseInt(countElement.textContent, 10);
  if (count > 0) {
    count -= 1;
    countElement.textContent = count;
    updateLocalStorage(itemId, count);
  }
}

export function updateLocalStorage(itemId, count) {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  counts[itemId] = count;
  localStorage.setItem("counts", JSON.stringify(counts));
}

export function getCountFromLocalStorage(itemId) {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  return counts[itemId] || 0;
}
