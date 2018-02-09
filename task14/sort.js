//  冒泡排序
function bubbleSort(paramArr) {
    const arr = paramArr.slice()
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}

//  选择排序
function selectionSort(paramArr) {
    const arr = paramArr.slice()
    for (let i = 0; i < arr.length; i++) {
        let minIndex = 0
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        arr.push(arr[minIndex])
        arr.splice(minIndex, 1)
    }
    return arr
}

//  插入排序
function insertionSort(paramArr) {
    const arr = paramArr.slice()
    for (let i = 1; i < arr.length; i++) {
        const value = arr[i]
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j]
            } else {
                arr[j + 1] = value
            }
        }
    }
    return arr
}