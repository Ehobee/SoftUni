function solve(arr, n) {

    for(let i = 0; i <=n; i++) {
        let elToMove = arr.shift();
        arr.push(elToMove)
        
    }
    console.log(arr.join(' '));
}
solve(['1', 
'2', 
'3', 
'4'], 
4
)