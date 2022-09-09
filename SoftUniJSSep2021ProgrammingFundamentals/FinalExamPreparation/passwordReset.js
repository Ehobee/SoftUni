function passwordReset(input) {

    let predefined = input.shift();
    let length = predefined.length;
    let rawPass = '';

    for (let line of input) {
        line = line.split(' ');

        let command = line[0];

        if (command === 'Done') {


        } else if (command === 'TakeOdd') {
            for (let i = 0; i < length; i++) {
                if (i % 2 !== 0) {
                    rawPass += predefined[i];

                }
            }
            console.log(rawPass)
        } else if (command === 'Cut') {
            let index = Number(line[1]);
            let length = Number(line[2]);
            let endIndex = index + length;

            let substring = rawPass.substring(index, endIndex)
            rawPass = rawPass.replace(substring, '');
            console.log(rawPass)
        } else if (command === 'Substitute') {
            let substring = line[1];
            let substitute = line[2];
            if (!rawPass.includes(substring)) {
                console.log('Nothing to replace!');
                break;
            } else {
                while (rawPass.includes(substring)) {
                    rawPass = rawPass.replace(substring, substitute);
                }
                console.log(rawPass);
            }

        }
    }
    console.log(`Your password is: ${rawPass}`)
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])


    function pwReset(input = []) {
        let inputPassword = input.shift();
        let lines = input.slice(0, input.indexOf('Done'));
        for (const line of lines) {
            let [command, value, value2] = line.split(' ');
     
            switch (command) {
                case 'TakeOdd':
                    let tempStr = '';
                    for (let i = 0; i < inputPassword.length; i++) {
                        if (i % 2 !== 0) {
                            tempStr += inputPassword[i]
                        }
                    }
                    inputPassword = tempStr;
                    console.log(inputPassword);
                    break;
     
                case 'Cut':
                    let index = Number(value);
                    let length = Number(value2);
                    let arr = Array.from(inputPassword).splice(index, length).join('');
                    inputPassword = inputPassword.replace(arr, '');
                    console.log(inputPassword);
                    break;
                case 'Substitute':
                    let substring = value;
                    let substitute = value2;
                    if (!inputPassword.includes(substring)) {
                        console.log('Nothing to replace!');
                    } else {
                    while (inputPassword.includes(substring)) {
                        inputPassword = inputPassword.replace(substring, substitute);
                    }
                    console.log(inputPassword);
                }
            }
        }
     
        console.log(`Your password is: ${inputPassword}`);
    }
    pwReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])