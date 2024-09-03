const range = document.getElementById("range");

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;
  const rangeWidth = parseFloat(getComputedStyle(e.target).width);
  const labelWidth = parseFloat(getComputedStyle(label).width);
  const max = +e.target.max;
  const min = +e.target.min;
  const left = value * (rangeWidth / max) - labelWidth / 2 + scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;
  label.innerHTML = value;
});
