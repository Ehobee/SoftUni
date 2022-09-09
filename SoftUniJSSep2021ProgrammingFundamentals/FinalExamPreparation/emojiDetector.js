function detector(string) {

    let regexEmojis = /(\*\*|::)([A-Z][a-z]{2,})\1/g;

    let validEmojis = string[0].match(regexEmojis);

    let coolnessTreshhold = 1;
    let coolEmojis = [];

    if (validEmojis !== null) {
        let regexDigits = /[0-9]/g;

        let digits = string[0].match(regexDigits);
        digits = digits.map(Number);

        for (number of digits) {
            coolnessTreshhold *= number;
        }

        for (emoji of validEmojis) {
            let emojiCoolness = 0;
            let emojiLength = emoji.length - 2;

            for (let i = 2; i < emojiLength; i++) {
                let code = emoji.charCodeAt(i);
                emojiCoolness += code;
            }

            if (emojiCoolness > coolnessTreshhold) {
                coolEmojis.push(emoji);
            }
        }
    }
    coolEmojis = coolEmojis.join(('\n'))
    console.log(`Cool threshold: ${coolnessTreshhold}`);
    console.log(`${validEmojis ? validEmojis.length : 0} emojis found in the text. The cool ones are:\n${coolEmojis}`);
}
detector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English."])