// Activity 1
// Task 1 

let num = -45;
if (num < 0) {
    console.log(`${num} is a negative number.`);
}
else if (num > 0) {
    console.log(`${num} is a positive number.`);
}
else {
    console.log(`It is ${num}.`);
}

// Task 2

let age = 18;
if (age >= 18) {
    console.log(`you are eligible to vote.`);
}
else {
    console.log(`you are not eligible to vote.`);
}

// Activity 2
// Task 3

let num1 = 45;
let num2 = 54;
let num3 = 13;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is greater`)
    }
    else {
        console.log(`${num3} is greater`)
    }
}
else {
    if (num2 > num3) {
        console.log(`${num2} is greater`)
    }
    else {
        console.log(`${num3} is greater`)
    }
}

// Activity 3
// Task 4

switch (1) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid Input');
}

// Task 5
let marks = 70;
switch (true) {
    case (marks >= 90 && marks <= 100):
        console.log('Grade A');
        break;
    case (marks >= 70 && marks <= 90):
        console.log('Grade B');
        break;
    case (marks >= 50 && marks <= 70):
        console.log('Grade C');
        break;
    case (marks >= 40 && marks <= 50):
        console.log('Grade D');
        break;
    case (marks >= 33 && marks <= 40):
        console.log('Grade E');
        break;
    case (marks < 33):
        console.log('Grade F');
        break;
    default:
        console.log('Invalid Marks');
}

// Activity 4
// Task 6

let num4 = 2004;
console.log((num4 % 2 == 0) ? `${num4} is even` : `${num4} is odd`)

// Activity 5
// Task 7

let year = 2005;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year} is a leap year`);
        }
        else {
            console.log(`${year} is not a leap year`);
        }
    }
    else {
        console.log(`${year} is a leap year`);
    }
}
else {
    console.log(`${year} is not a leap year`);
}