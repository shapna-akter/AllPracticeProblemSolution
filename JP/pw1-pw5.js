//Problem-21
// PW2.01.01 Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // Check if the complement exists in the numMap
        if (numMap.hasOwnProperty(complement)) {
            // Return the indices if found
            return [numMap[complement], i];
        }
        // If not found, add the current element and its index to the numMap
        numMap[nums[i]] = i;
    }
    // If no solution is found (which should not happen according to the problem statement)
    return null;
  }
  
  // Example usage:
  const nums1 = [2, 7, 11, 15];
  const target1 = 9;
  const result1 = twoSum(nums1, target1);
  console.log(result1);  // Output: [0, 1]
  
  const nums2 = [3, 2, 4];
  const target2 = 6;
  const result2 = twoSum(nums2, target2);
  console.log(result2);  // Output: [1, 2]
  
  const nums3 = [3, 3];
  const target3 = 6;
  const result3 = twoSum(nums3, target3);
  console.log(result3);  // Output: [0, 1]
  
  
  //Problem-22
  // PW2.01.02 3Sum
  
  // Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
  
  // Notice that the solution set must not contain duplicate triplets.
  
  // Example 1:
  // Input: nums = [-1,0,1,2,-1,-4]
  // Output: [[-1,-1,2],[-1,0,1]]
  // Explanation: 
  // nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
  // nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
  // nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
  // The distinct triplets are [-1,0,1] and [-1,-1,2].
  // Notice that the order of the output and the order of the triplets does not matter.
  // Example 2:
  
  // Input: nums = [0,1,1]
  // Output: []
  // Explanation: The only possible triplet does not sum up to 0.
  // Example 3:
  
  // Input: nums = [0,0,0]
  // Output: [[0,0,0]]
  // Explanation: The only possible triplet sums up to 0.
   
  
  // Constraints:
  // 3 <= nums.length <= 3000
  // -105 <= nums[i] <= 105
  
  function threeSum(nums) {
    const result = [];
  
    // Sort the array to make it easier to handle duplicates
    nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the first element in the triplet
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
  
        let left = i + 1;
        let right = nums.length - 1;
  
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
  
            if (sum === 0) {
                // Found a triplet with the desired sum
                result.push([nums[i], nums[left], nums[right]]);
  
                // Skip duplicates for the second element in the triplet
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
  
                // Skip duplicates for the third element in the triplet
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
  
                // Move both pointers towards the center
                left++;
                right--;
            } else if (sum < 0) {
                // If sum is less than 0, move the left pointer to the right
                left++;
            } else {
                // If sum is greater than 0, move the right pointer to the left
                right--;
            }
        }
    }
  
    return result;
  }
  
  // Example usage:
  const numsOne = [-1, 0, 1, 2, -1, -4];
  const resultOne = threeSum(numsOne);
  console.log(resultOne); 
  
  const numsTwo = [0, 1, 1];
  const resultTwo = threeSum(numsTwo);
  console.log(resultTwo);
  
  const numsThree = [0, 0, 0];
  const resultThree = threeSum(numsThree);
  console.log(resultThree);
  
  
  //Problem- 23
  // PW2.01.03 Remove Duplicates From Sorted Array
  
  // Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
  
  // Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
  
  // Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
  // Return k.
  // Custom Judge:
  
  // The judge will test your solution with the following code:
  
  // int[] nums = [...]; // Input array
  // int[] expectedNums = [...]; // The expected answer with correct length
  
  // int k = removeDuplicates(nums); // Calls your implementation
  
  // assert k == expectedNums.length;
  // for (int i = 0; i < k; i++) {
  //     assert nums[i] == expectedNums[i];
  // }
  // If all assertions pass, then your solution will be accepted.
  
  // Example 1:
  // Input: nums = [1,1,2]
  // Output: 2, nums = [1,2,_]
  // Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
  // It does not matter what you leave beyond the returned k (hence they are underscores).
  // Example 2:
  // Input: nums = [0,0,1,1,1,2,2,3,3,4]
  // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
  // Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  // It does not matter what you leave beyond the returned k (hence they are underscores).
  // Constraints:
  // 1 <= nums.length <= 3 * 104
  // -100 <= nums[i] <= 100
  // nums is sorted in non-decreasing order.
  
  function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0; // Empty array has 0 unique elements
    }
  
    let k = 1; // Position to insert unique elements
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            // If the current element is different from the previous one
            // Move the unique element to position k
            nums[k] = nums[i];
            k++;
        }
    }
  
    return k; // k represents the number of unique elements
  }
  
  // Example usage:
  const nums1 = [1, 1, 2];
  const k1 = removeDuplicates(nums1);
  console.log(k1);  // Output: 2, nums1 = [1, 2, _]
  
  const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const k2 = removeDuplicates(nums2);
  console.log(k2);  // Output: 5, nums2 = [0, 1, 2, 3, 4, _, _, _, _, _]
  
  
  //Problem-24
  // PW2.01.04 Next Permutation
  
  // A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
  
  // For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
  // The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
  
  // For example, the next permutation of arr = [1,2,3] is [1,3,2].
  // Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
  // While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
  // Given an array of integers nums, find the next permutation of nums.
  
  // The replacement must be in place and use only constant extra memory.
  
   
  
  // Example 1:
  
  // Input: nums = [1,2,3]
  // Output: [1,3,2]
  // Example 2:
  
  // Input: nums = [3,2,1]
  // Output: [1,2,3]
  // Example 3:
  
  // Input: nums = [1,1,5]
  // Output: [1,5,1]
   
  
  // Constraints:
  
  // 1 <= nums.length <= 100
  // 0 <= nums[i] <= 100
  
  function nextPermutation(nums) {
    let i = nums.length - 2;
  
    // Find the first pair of adjacent elements where nums[i] < nums[i+1]
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
  
    if (i >= 0) {
        let j = nums.length - 1;
  
        // Find the first element nums[j] such that nums[j] > nums[i]
        while (nums[j] <= nums[i]) {
            j--;
        }
  
        // Swap nums[i] with nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    // Reverse the subarray starting from nums[i+1]
    let start = i + 1;
    let end = nums.length - 1;
  
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
  }
  
  // Example usage:
  const nums1 = [1, 2, 3];
  nextPermutation(nums1);
  console.log(nums1);  // Output: [1, 3, 2]
  
  const nums2 = [3, 2, 1];
  nextPermutation(nums2);
  console.log(nums2);  // Output: [1, 2, 3]
  
  const nums3 = [1, 1, 5];
  nextPermutation(nums3);
  console.log(nums3);  // Output: [1, 5, 1]
  
  
  //Problem-25
  // PW2.01.05 Search Insert Position
  
  // Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
  
  // You must write an algorithm with O(log n) runtime complexity.
  
  // Example 1:
  // Input: nums = [1,3,5,6], target = 5
  // Output: 2
  // Example 2:
  
  // Input: nums = [1,3,5,6], target = 2
  // Output: 1
  // Example 3:
  
  // Input: nums = [1,3,5,6], target = 7
  // Output: 4
   
  // Constraints:
  // 1 <= nums.length <= 104
  // -104 <= nums[i] <= 104
  // nums contains distinct values sorted in ascending order.
  // -104 <= target <= 104
  
  
  function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (nums[mid] === target) {
            return mid; // Target found
        } else if (nums[mid] < target) {
            left = mid + 1; // Continue search in the right half
        } else {
            right = mid - 1; // Continue search in the left half
        }
    }
  
    // If the loop exits, the target is not found, and left represents the index where it should be inserted
    return left;
  }
  
  // Example usage:
  const nums1 = [1, 3, 5, 6];
  const target1 = 5;
  console.log(searchInsert(nums1, target1));  // Output: 2
  
  const nums2 = [1, 3, 5, 6];
  const target2 = 2;
  console.log(searchInsert(nums2, target2));  // Output: 1
  
  const nums3 = [1, 3, 5, 6];
  const target3 = 7;
  console.log(searchInsert(nums3, target3));  // Output: 4  