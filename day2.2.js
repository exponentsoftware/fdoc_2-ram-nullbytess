const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];


function Filter(){
    users.filter(user => {
        if(user.scores > 85){
            return console.log(user)
        }
    });
}
Filter(users)



function addUser(){
    users.forEach(user => {
        if(user.name !== 'Abhishek'){
            
            users.name = "Abhishek",
            users.scores = 81,
            users.skills= ['HTM', 'CSS', 'JS'],
            users.age = 21
        }
    });
}
addUser(users)



function addUserSkill(){
    users.forEach(user => {
        if(user.name === 'John'){
            user.skills[1] = 'REACT'
        }
    });
}
addUserSkill(users)


function editUser(){
    users.map(user => {
        if(user.name === 'Sara'){
            user.name = 'Brook'
        }
    });
}
editUser(users)