function chunkArray(arr, n) {
  if (!n) {
    return;
  } else if (n === 1) {
    console.log([arr[0]]);
    return [arr[0]];
  } else if (n > arr.length) {
    console.log([arr]);
    return [arr];
  } else {
    let parent = [];
    for (let i = 0; i < arr.length; i++) {
      let output = [];
      while (output.length < n && i < arr.length) {
        output.push(arr[i]);
        if (output.length !== n) {
          i++;
        }
      }
      parent.push(output);
    }
    console.log(parent);
  }
}
chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

function chunkArray(arr, n) {
  if (!n) {
    return;
  } else if (n === 1) {
    console.log([arr[0]]);
    return [arr[0]];
  } else if (n > arr.length) {
    console.log([arr]);
    return [arr];
  } else {
    let output = [];
    for (let i = 0; i < arr.length; i += n) {
      output.push(arr.slice(i, i + n));
    }
    console.log(output);
  }
}
chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
