const checkboxes = [good, cheap, fast];

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", () => {
    if (checkboxes.every((cb) => cb.checked)) {
      const unchecked = checkboxes.find((cb) => cb !== checkbox);
      unchecked.checked = false;
    }
  })
);
