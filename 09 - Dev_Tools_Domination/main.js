const people = [{ name: 'snickers', age: 2}, { name: 'Julia', age : 3}];

function makeJulia(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

//Interpolated
console.log('Hello I am %s string', 'poop');

//Style
console.log('%c I am some great text', 'font-size: 15px; background: red');

//warning!
console.warn('OH NOOO');

//error 
console.error('shit!');

//info
console.info('Crocodiles eat 3-4 people per year');

//Testing

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');

//clearing
// console.clear();

//Viewing DOM Elements
// console.log(p);
// console.dir(p);

//Grouping things together
people.forEach(people  => {
    console.group(`${people.name}`);
    console.log(`This is ${people.name}`);
    console.log(`This is ${people.name} is ${people.age} years old`);
    console.log(`This is ${people.name} is ${people.age * 7} years old`);
    console.groupEnd(`${people.name}`)
});

//counting

console.count('wes')
console.count('wes')
console.count('beer')
console.count('wes')

//timing
console.log('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
})


describe('add()', () => {
    it('adds two numbers', () => {
        // arrange
        const num1 = 1;
        const num2 = 2;
        
        // act
        const result = add(num1, num2);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });

