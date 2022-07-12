var merge = function (nums1, m, nums2, n) {
    let newArr1 = [],
        newArr2 = []
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i + 1] > nums1[i]) {
            newArr1.push(nums1[i + 1])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i + 1] > nums2[i]) {
            newArr2.push(nums2[i + 1])
        }
    }
    newArr1 = newArr1.slice(0, m)
    newArr2 = newArr2.slice(0, n)
    return newArr1.concat(newArr2).sort((a, b) => a - b)
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 0))
