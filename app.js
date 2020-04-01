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
