// Bubble Sort
//    Best case: O(n)
//    Worst case: O(n^2)
//    Average case: O(n^2)

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
};

// Merge Sort
//    Best, Worst, Average case: O(nlog(n))

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
};

// Quicksort
//    Best case: O(nlog(n))
//    Average case: O(nlog(n))
//    Worst case: O(n^2)

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
          swap(array, i, j);
          j++;
      }
  }
  swap(array, end-1, j);
  return j;
};

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = qPartition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
};

function qPartition(array, start, end) {
  const pivot = array[start];
  let j = end-1
  for (let i = end-1; i > start; i--) {
      if (array[i] >= pivot) {
          swap(array, i, j);
          j--
      }
  }
  swap(array, start, j);
  return j;
};

// 1. Understanding merge sort

const list = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

// [21, 1, 26, 45]
// [9]
// [21], [1]
// [1, 21, 26, 45], [2, 9, 28, 29]

mergeSort(list)

// 2. Understanding quicksort


const array = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]

//    1) the pivot could have been either 14 or 17 since all the numbers
//        to the left are smaller and all the numbers to the right is larger
//    2)  10, 3, 9, 12, 19, 14, 17, 16, 13, 15
//        12, 9, 13, 3, 10, 14, 19, 16, 15, 17

quickSort(array)

// 3. Implementing quicksort

const dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

// console.log(qSort(dataset))

// 4. Implementing merge sort

// console.log(mergeSort(dataset))

// 5. Sorting a linked list using merge sort

// Push values into array then use merge sort

// 6. Bucket sort

/*function bucketSort(array, min, max) {
  const numMap = new Map();
}*/

// 7. Sort in place

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * array.length)
    swap(array, i, j)
  }
  return array
}

// console.log(shuffle(array))

// 8. Sorting books

const books = ['Harry Potter', 'Lord of the Rings', 'Twilight', 'To Kill a Mockingbird', 'The Giver', 'Alexander']

function sortBooks(books) {
  for (let i = 0; i < books.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < books.length; j++) {
      if (books[j] < books[min]) {
        min = j;
      }
    }
    swap(books, i, min);
  }
  return books;
}

// console.log(sortBooks(books))