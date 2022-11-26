


let date = {
    day: 2,
    month: 2,
    year: 2020
}

function isPalindrome(date) {
    let { day, month, year } = date;
    if (day < 10) {
        day = "0" + day
    }
    if (month < 10) {
        month = "0" + month
    }
    let dateString = `${day}${month}${year}`; // joining date
    let reverseString = dateString.split("").reverse().join("") // reversed date

    return dateString == reverseString // true or false
}

function getAllDateFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}
function checkAllDateFormatsPalindrome(date) {
    let dateFormatArr = getAllDateFormats(date);
    let palindromeArr = [];
    for (let i = 0; i < dateFormatArr.length; i++) {
        if (isPalindrome(dateFormatArr[i])) {
            palindromeArr.push(dateFormatArr[i])
        }
    }
    return palindromeArr;
}

function isLearYear(year) {
    if (year % 400 == 0) return true

    if (year % 100 == 0) return false

    if (year % 4 == 0) return true

    return false
}
let monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function getNextDate(date) {
    let day = date.day + 1;
    let month = date.month;
    let year = date.year;

    if (month = 2) {
        if (isLearYear) {
            if (day > 29) {
                day = 1;
                month = 3;
            }
        }
        else {
            if (day > 28) {
                day = 1;
                month = 3;
            }
        }
    }
    else {
        if (day > monthArr[month - 1]) {
            day = 1;
            month++;
        }
    }
    if (month > 12) {
        month = 1;
        year++;
    }
    return { day: day, month: month, year: year };
}

function getNextPalidromeDate(date) {
    let nextDate = getNextDate(date);
    let counter = 0;

    while (1) {
        counter++;
        let resultList = checkAllDateFormatsPalindrome(date);

        for (let i = 0; i < resultList.length; i++) {
            if (resultList[i]) {
                return [counter, nextDate];
            }
        }
        nextDate = getNextDate(nextDate);
    }
}

console.log(getNextPalidromeDate(date))
