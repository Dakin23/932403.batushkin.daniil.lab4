let userName = prompt('Как вас зовут?');

if (userName === null || userName.trim() === '') {
    userName = 'гость';
}

alert('Здравствуйте, ' + userName + '! Добро пожаловать на страницу данных эксперимента.');
console.log('Пользователь: ' + userName);

const measurements = [12, 45, 78, 54, 90, 8, 63];

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function filterAboveAverage(arr) {
    const average = getSum(arr) / arr.length;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            result.push(arr[i]);
        }
    }
    return result;
}

const max = findMax(measurements);
const min = Math.min.apply(null, measurements);
const average = getSum(measurements) / measurements.length;
const aboveAverage = filterAboveAverage(measurements);

const threshold = max * 0.1;
let lowCount = 0;

for (let i = 0; i < measurements.length; i++) {
    if (measurements[i] <= threshold) {
        lowCount = lowCount + 1;
        console.log('Аномально низкое значение: ' + measurements[i]);
    }
}

alert('Среднее значение – ' + average + ', ' + aboveAverage.length + ' измерений – выше среднего');
console.log('Количество аномально низких значений: ' + lowCount);

if (max - min > 50) {
    console.log('Наблюдается высокая вариативность данных');
}
