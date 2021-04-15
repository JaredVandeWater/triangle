function myisTriangle(num1, num2, num3) {
    let arr = [num1, num2, num3]

    let largestNum = Math.max(num1, num2, num3)
    console.log(largestNum)

    let otherNums = arr.filter(n => n !== largestNum)
    console.log(otherNums);
    if ((otherNums[0] + otherNums[1]) < largestNum) {
        return "Nope not a triangle"
    }
    return "yup it's a triangle"
}


console.log(myisTriangle(100, 50, 201));


console.log(myisTriangle(100, 100, 100))

console.log(myisTriangle(100, 100, 50))


//Mine failed again I over complicated it.


//or you can simply s1>s2+s3 && s2>s2+s3 && s3 > s1 + s2


// I could have used a sort to fix my problem, arr.sort((a,b)) => a-b)
// then return arr[2] < arr[0] + arr[1]