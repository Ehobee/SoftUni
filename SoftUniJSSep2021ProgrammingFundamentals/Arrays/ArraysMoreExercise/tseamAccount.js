function tseamAccount(arr) {

    let array = arr;
    let arrayLength = array.length;
    let games = array.shift().split(' ')

    for (let i = 0; i < arrayLength; i++) {
        let [command, game] = array[i].split(' ');
        let index = games.indexOf(game)
        if (command === 'Play!') {
            break;

        } else if (command === 'Install' && !games.includes(game)) {
            games.push(game);

        } else if (command === 'Uninstall' && games.includes(game)) {
            games.splice(index, 1);

        } else if (command === 'Update' && games.includes(game)) {
            games.splice(index, 1);
            games.push(game);

        }
        else if (command === 'Expansion') {
            game = game.split('-');
            if (games.includes(game[0])) {
                let index = games.indexOf(game[0]);
                games.splice(index + 1, 0, `${game[0]}:${game[1]}`);
            }

        }
    }
    console.log(games.join(' '))
}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']

)