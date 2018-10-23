
function takeANumber(arr, name) {
  arr.push(name);
};

katzDeli = [];
otherDeli = ["Steven", "Blake", "Avi"];

takeANumber(katzDeli, 'Ada');
takeANumber(katzDeli, 'Grace');
takeANumber(katzDeli, 'Kent');

console.log(katzDeli)
