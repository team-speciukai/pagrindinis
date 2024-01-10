// functions -------------------------< START

// functions -------------------------< START

function incrementCount(itemId, itemTitle) {
  const countElement = document.getElementById(`count${itemId}`);

  // Check if the countElement exists before proceeding
  if (countElement) {
    let count = parseInt(countElement.textContent, 10);
    count += 1;
    countElement.textContent = count;
    updateLocalStorage(itemId, count, itemTitle);
  }
function incrementCount(itemId, itemTitle) {
  const countElement = document.getElementById(`count${itemId}`);
  let count = parseInt(countElement.textContent, 10);
  count += 1;
  countElement.textContent = count;
  updateLocalStorage(itemId, count, itemTitle);
}

function decrementCount(itemId) {
  const countElement = document.getElementById(`count${itemId}`);

  // Check if the countElement exists before proceeding
  if (countElement) {
    let count = parseInt(countElement.textContent, 10);

    if (count > 0) {
      count -= 1;
      countElement.textContent = count;

      if (count === 0) {
        removeItemFromLocalStorage(itemId);
      } else {
        updateLocalStorage(itemId, count);
      }
    }
  }
}

function updateLocalStorage(itemId, count, title) {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  counts[itemId] = count;
  localStorage.setItem("counts", JSON.stringify(counts));

  if (title) {
    const titles = JSON.parse(localStorage.getItem("titles")) || {};
    titles[itemId] = title;
    localStorage.setItem("titles", JSON.stringify(titles));
  }
}

function getCountFromLocalStorage(itemId) {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  return counts[itemId] || 0;
}

function removeItemFromLocalStorage(itemId) {
  const counts = JSON.parse(localStorage.getItem("counts")) || {};
  delete counts[itemId];
  localStorage.setItem("counts", JSON.stringify(counts));
}

// functions -------------------------> END

// exports ---------------------------< START

export {
  incrementCount,
  decrementCount,
  updateLocalStorage,
  getCountFromLocalStorage,
  removeItemFromLocalStorage,
};

// exports ---------------------------< END
