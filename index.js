// Code your solution here
 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
 function findMatching(params, str) {
    return params.filter((n) => {
        return (n == str.toUpperCase() || n == str.toLowerCase() || n == str)
    });
}

function fuzzyMatch(params, char) {
    return params.filter((n) => {
        return (n[0] == char[0]);
    })
}

function matchName(params, name1) {
    let x = [{}]
    let i = 0;
    for (const user of params) {
        if (user.name == name1) {
            x[i] = (user);
            i++;
        }
    }
    return x;
}