//  计数排序
function countingSort(arr) {
    const bucketArr = []
    const sortedArr = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (!bucketArr[arr[i]]) {
            bucketArr[arr[i]] = 1
        } else {
            bucketArr[arr[i]] += 1
        }
    }

    for (let i = 0; i < bucketArr.length - 1; i++) {
        if (bucketArr[i]) {
            for (let j = 0; j < bucketArr[i]; j++) {
                sortedArr.push(i)
            }
        }
    }

    return sortedArr
}


// 桶排序
function bucketSort(arr, step) {
    const bucket = []
    const sortedArr = []

    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor(arr[i] / step)
        if (!bucket[index]) {
            bucket[index] = []
            bucket[index].push(arr[i])
        } else {
            bucket[index].push(arr[i])
            for (let j = bucket[index].length - 1; j > 0; j--) {
                if (bucket[index][j - 1] > bucket[index][j]) {
                    const temp = bucket[index][j]
                    bucket[index][j] = bucket[index][j - 1]
                    bucket[index][j - 1] = temp
                } else {
                    break
                }
            }
        }
    }

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i]) {
            for (let j = 0; j < bucket[i].length; j++) {
                sortedArr.push(bucket[i][j])
            }
        }
    }

    return sortedArr
}