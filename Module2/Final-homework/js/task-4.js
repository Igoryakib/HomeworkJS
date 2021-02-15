const formatString = function (string) {
  const array = string.split("");

  if (array.length > 40) {
    array.length = 40;
    array.splice(41, 0, "...");
    const item = array.join("");
    return item;
  }

  const def = array.join("");
  return def;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// повернеться форматований рядок