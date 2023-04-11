// Write a function that takes in a string and returns it when reversed
// let food = “eating”

// function x(food){
//     return food.reverse()
// }
// let food = "eating"
// let p = x(food)
// console.log(p);

// Write a function that takes in the following array and 
// consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23

function w(num){
    if(num.length<=1){
        return num
    }
    let middle = Math.floor(num.length/2)
    let left = num.slice(0,middle)
    let right = num.slice(middle)
    return sort(w(left),w(right))
}

function sort(left,right){
    empty = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            empty.push(left.shift())
        
        }
        else{
            empty.push(right.shift())
        }
    }
    return [...empty,...left,...right]
}
let num= [2,8,0,23,5,45,76]
let f = w(num)
console.log(f);

function w(num,target){
    let left = 0
    let right = num.length-1
    while(left<=right){
        let middle = Math.floor(left+right/2)
        if(num[middle]==target){
            return target
        }
        else if(num[middle]<target){
            left = middle+1
        }
        else{
            right=middle-1
        }
    }
    return null
}
target = 23
console.log(w(num,target));

// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” 
// if not console log i.e “2001 is not a leap year”



// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function rang(number){
    if(num%3==0){
        return ("Fizz")
    }
    else if(num%5==0){
        return ("Buzz")

    }
    else {
        return ("Fizzbuzz")
    }


}
number = Range(1,101)
r = rang(number)
console.log(r);

// Write a function that takes in an array of numbers and returns
//  an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]

function numbers(numArray){
    p = []
    for(x in numArray){
        if(x in p)
        p+=x
        return (x*4)
    }
}
let numArray = [12,87,45,75,23,64,73]
let k = numbers(numArray)
console.log(k);


// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]

function arr3(){
    
}

























