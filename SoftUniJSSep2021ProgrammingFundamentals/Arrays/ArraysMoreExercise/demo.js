function tseamAccount(input) {
    let games = input[0].split(' ');
 
    for (let i = 1; i < arrayLength; i++) {
        let currentEl = input[i].split(' ');
        let command = currentEl[0];
        let game = currentEl[1];

    for (let i = index; i < arrayLength; i++) {
        let [commands, games] = array[i].split(" ");

        if (command === 'Play!');
        break;

        if (command === 'Install' && !games.includes(game)) {
            newSequence.push(games)
        }
    }
    console.log(newSequence)
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)
