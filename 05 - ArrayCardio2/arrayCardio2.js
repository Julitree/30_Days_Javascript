    const people = [
        { name: 'Wes', year: 1988},
        { name: 'Kait', year: 1986},
        { name: 'Irv', year: 1970},
        { name: 'Lux', year: 2015},
    ]

    const comments = [
        {text: 'love this!', id: 523423},
        {text: 'Super good', id: 823423},
        {text: 'You are the best!', id: 2039842},
        {text: 'love this!', id: 523423},
        {text: 'love this!', id: 523423},
    ];

    //Some and Every Checks
    //Array.prototype.some() // is at least one person19?
    
    const isAdult = people.some(person=>{
        const currentYear = new Date().getFullYear();
        return currentYear - person.year >= 19;
    })

    console.log(isAdult); 

    //Array.protype.every()// is everyone 19?
     
     const allAdults = people.every(person=>{
        const currentYear = new Date().getFullYear();
        return currentYear - person.year == 19;
     })

    console.log(allAdults); 

    //Array.prototype.find()
    //Find is like filter, but instead returns just the one you are looking for
    // Find the comment with the ID of 823423

    const commentId = comments.find(comment =>  comment.id == 823423)
    console.log(commentId);

    //Array.protype.findIndex()
    //find the comment with this ID
    //delete de comment with the ID of 823423


    const index= comments.findIndex(cedula=>cedula.id == 823423);
    comments.splice(index, 1)
    console.log(comments);