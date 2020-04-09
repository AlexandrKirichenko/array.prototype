//Task FizzBazz
// Напишите программу, которая выводит  все цифры от 1 до 15, с двумя исключениями. 
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// И чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
const fizzBazz = n => Array.from(new Array(n), (el, i) => i + 1)
.map(el => `${el} : ${(el % 3 == 0 && el % 5 == 0)?'FizzBazz':(el % 5 == 0)?'Bazz':( (el % 3 == 0)?'Fizz':'')}`  );

console.table( fizzBazz(15) )

let a = 15;
console.log(a);
//< Берем текст огромный, отрезаем 40 слов, проверяем выходят они за диапазон 230 символов, если выходят мы слово последнее откидываем
let text1 ="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
let text2 ="voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."

// const maxLength = 230;
// const maxWords = 40;
// let textLengt = text1.split(' ').slice(0,maxWords).join(' ').length;

function prepareText(textData, maxLength, maxWords){
    const textLengt = textData.split(" ").slice(0,maxWords).join(" ").length;
    return result = (textLengt > maxLength) ? (textData.split(" ").slice(0,maxWords-1).join(" ") + "...") : (textData.split(" ").slice(0,maxWords).join(" ") + "...");
}

console.log(prepareText(text1, 230,40));
console.log(prepareText(text2, 150, 20));

const name = 'anonim';

const Sasha = {
    name: 'Sasha',
    password: '123456789',
    gender: 'male',
    age: 29,
    salary: 2500,
    address:{
        street: 'Lenina 55'
    },

    sayHello: function(userName){
        console.log(`Привет ${userName}, мое имя ${this.name}`)
    },
}

const John = {
    name: 'John',
    password: '123456789',
    gender: 'male',
    age: 37,
    salary: 2500,
    address:{
        street: 'Lenina 55'
    },

    sayHello: function(userName){
        console.log(`Hello ${userName}, my name ${this.name}`)
    },
}

// Получаем случайное имя
const getRandomFirstName = () => {
    const names = [
        "Aaliyah",
        "Aaron",
        "Abagail",
        "Abbey",
        "Abbie",
        "Abbigail",
        "Abby",
        "Abdiel",
        "Abdul",
        "Abdullah",
        "Abe",
        "Abel",
        "Abelardo",
        "Abigail",
        "Abigale",
        "Abigayle",
        "Abner",
        "Abraham",
        "Ada",
        "Adah",
    ];

    return names[Math.floor(Math.random()*names.length)]
}

// Получаем случайную фамилию
const getRandomLastName = () => {
    const names = [
        "Abbott",
        "Abernathy",
        "Abshire",
        "Adams",
        "Altenwerth",
        "Anderson",
        "Ankunding",
        "Armstrong",
        "Auer",
        "Aufderhar",
        "Bahringer",
        "Bailey",
        "Balistreri",
        "Barrows",
        "Bartell",
        "Bartoletti",
        "Barton",
        "Bashirian",
        "Batz",
        "Bauch",
        "Baumbach",
        "Bayer",
        "Beahan",
        "Beatty",
        "Bechtelar",
        "Becker",
        "Bednar",
    ];

    return names[Math.floor(Math.random()*names.length)]
}

const getFullName = () => `${getRandomFirstName()} ${getRandomLastName()}`

const getGender = () => Math.random()> 0.5?'male':'famale'

function User(name=getFullName(),password,gender=getGender(),age=Math.ceil(Math.random()*100),salary=Math.ceil(Math.random()*2000)){
    this.name = name;
    this.password = password;
    this.gender = gender;
    this.age = age;
    this.salary = salary;
}

const users = Array.from(new Array(10)).map(el => new User())

const sayHello = Sasha.sayHello;

const sum1 = function(){
    console.log(arguments);
    return Array.from(arguments).reduce( (acc,i) => acc + i,0);
}

const sum2 = (x,...rest) => { //остаточные параметры, х - то что мы не забрали. Т.к. в стрелочной функции нет аргументов, и чтоб до них достучаться мы исп ...rest
    console.log(rest); // рест придуман для того,если параметров передано больше чем надо, мы можем их забрать rest будет массивом, а не массивоподоб объектом
    return rest.reduce( (acc,i) => acc + i,0);
}

console.log(sum1(5,10,15,20));
console.log(sum2(5,10,15,20));
//Самовызывающаяся функция 
function f(){
    console.log("arguments");
}
f();

const f = function (){
    console.log("arguments");
}
// console.log(f)
console.log(f());

Если нам нужно чтобы функция просто выполнилась в этом же месте , можно написать так
(function (text){
    console.log("arguments" + text);
})/** функцию мы обернули, чтобы интерпретат. было понятно, что это выражение*/("some text"); //а эти что его нужно выполнить сечас

var arr1 = [];
for(var i=0;i<3;i++){
    arr1.push( ( (a) => () => console.log(a) )(i) )
}
console.log("I:" + i);
arr1[0]();
arr1[1]();
arr1[2]();
//А для let все работает нормально, без замыкания
function great(text){
    return function(name){
        console.log(`${text} ${name}`); //внутри этой функции текст(Hello) уже зафиксировался через замыкание
    }
}

const x = great('Hello');
const y = great('Bye');
x('Oleh') // т.е. с пом замыкания можно делать конструкторы блоков, т.е. f собрал с нужными параметрами, а потом только подкидываешь 
//значения кот. нужно менять
y('Vlad')

//Рекурсия
const text2 = "dsgdfgsdfgfsdhfdsghghhggggggggggggggggggggg";

function f(i){
    if(text2[i] == undefined){return i;}//условие выхода из рекурсии
    return f(i+1);
}

console.log(f(0));

const arr = [0,1,2,3,4,5];

function f(arr_nub){
    if(arr_nub.length == 1){return arr_nub[0];}//условие выхода из рекурсии
    return arr_nub.pop() + f(arr_nub);
}

console.log(f(arr));
