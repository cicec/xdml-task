//  冒泡排序
function bubbleSort(paramArr) {
    const arr = paramArr.slice()
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
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
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                const temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            } else {
                break
            }
        }
    }
    return arr
}

//  快速排序
function randomizedQuickSort(paramArr) {
    const swap = (arr, index1, index2) => {
        const temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }

    const partition = (arr, start, end) => {
        let storeIndex = start
        const standardIndex = end
        for (let i = start; i < end; i++) {
            if (arr[i] <= arr[standardIndex]) {
                swap(arr, storeIndex, i)
                storeIndex += 1
            }
        }
        swap(arr, storeIndex, end)
        return storeIndex
    }

    const sort = (arr, start, end) => {
        if (start > end) return []
        const storeIndex = partition(arr, start, end)
        return [
            ...sort(arr, start, storeIndex - 1),
            arr[storeIndex],
            ...sort(arr, storeIndex + 1, end)
        ]
    }

    return sort(paramArr.slice(), 0, paramArr.length - 1)
}