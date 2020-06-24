const inventors = [
    {first: 'Albert', last: ' Einstein', year: 1979, passed: 1955},
    {first: 'Isaac', last: ' Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];


const people = ['Beck, Glen', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
                'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
                    'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
                'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Sillas']


//Array.prototype.filter()
// 1. FIlter the list of inventors for those who were born in the 1500's
//inventor es el parametro y luego lo que esta en el parentesis es la condicion
const fifteen = inventors.filter(inventor=>(inventor.year >= 1500 && inventor.year < 1600))
console.table(`muestrame ${fifteen}`);

//Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const fullNames = inventors.map(inventor=> inventor.first + inventor.last);
console.log(fullNames);

//Array.prototype.sort()
// 3. Sort the inventor by birthdate, oldest to youngest

const birthdate = inventors.sort(function(a,b){
    if(a.year > b.year){
        return 1
    }else{
        return -1
    }
})

const ordered = inventors.sort((a,b) => a.year > b.year ?  1 : -1);
console.table(ordered);
 
//Array.prototype.reduce()
// .4 How many years did all the inventors live?

const totalYears = inventors.reduce((total,inventor)=>{
    return total + (inventor.passed - inventor.year);
},0);
console.log(`est es x ${totalYears}`);

// 5. Sort the inventors by years lived

const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1
});
console.table(oldest);

// 6. Create a list of boulevards in paris that contain 'de' anywhere in the name 
// https://en.wikipedia.org/wiki/category:Boulevards_in_Paris

/* const category = document.querySelector('.mw-category');
   const links = [...category.querySelectorAll('a')];

   const de = links.map(link => link.textContent).filter(stretName=>stretName.includes("de"));*/


// .7 sort exercise
// Sort the people alphabetically by last name

const alpha = people.sort((firstPerson, secondPerson) => {
    const [Afirst, Asecond] = firstPerson.split(', ');
    const [Bfirst, Bsecond] = secondPerson.split(', ');
    return Afirst > Bfirst ? -1 : 1;
});
console.log(alpha);

// .8 Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car' , 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk',
                'car', 'van', 'truck' ];

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {})
console.log(transportation);

