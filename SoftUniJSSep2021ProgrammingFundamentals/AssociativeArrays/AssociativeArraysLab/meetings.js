function meetings(arr) {

    let meetings = {};

    for (let line of arr) {
        let [weekday, name] = line.split(' ');
        //console.log(weekday, name);

        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let element in meetings) {
        console.log(`${element} -> ${meetings[element]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)