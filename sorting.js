function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
}


function insertionSort(arr) {
    var temp, inner;
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i];
        inner = i;
        while (inner > 0 && (arr[inner - 1] >= temp)) {
            arr[inner] = arr[inner - 1];
            inner--;
        }
        arr[inner] = temp;
    }
    return arr;
}


function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        let min = i;

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

function merge(arr1, arr2) {
    const arr = [...arr1, ...arr2];
    return bubbleSort(arr);
}

function mergeSort(arr) {
    if (arr.length < 1) return arr;
    if (arr.length < 2) {
        return arr;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
    return arr;
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length - 1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }
    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        }
        else {
            arr[k] = rightArr[n];
            n++;
        }
    }
}


function quickSort(list) {
    if (list.length == 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

function pivot(arr, left = 0, right = arr.length - 1) {
    let shift = left;
    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < arr[left]) {
            shift++;
            swap(arr, i, shift);
        }
    }

    swap(arr, left, shift);
    return shift;
}

function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
}