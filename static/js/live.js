$(document).ready(function () {
    $.getJSON("../static/assets/schedule.json", function (data) {

        var $tables = $('<div>');

        data.forEach(function (date) {
            var $table = $('<table>');
            var $schBody = $('<tbody>');

            var $header = $('<h2>').text(date['date']);

            $table.append(
                $('<tr>')
                    .append($('<th>').text('Time (EST)'))
                    .append($('<th>').text('Type'))
                    .append($('<th>').text('Event'))
                    .append($('<th>').text('Location'))
            );

            var j = 0;

            date['schedule'].forEach(function (element) {
                $schBody.append(
                    $('<tr>', { "class": (j++ % 2 == 0 ? "table-row-even" : "table-row-odd") })
                        .append($('<td>', { "style": "font-weight: bold; width: 15%;" }).html(element['time'] + element['end']))
                        .append($('<td>', { "style": "width: 12.5%;" }).html(element['type']))
                        .append($('<td>', { "style": "width: 50%;" }).html(element['event']))
                        .append($('<td>', { "style": "width: 22.5%;" }).html(element['location']))
                )
            });

            $table.append($schBody);
            $tables.append($header);
            $tables.append($table);
        });

        $("#schedule-container").append($tables);
    });
});

var countDownDate = new Date("October 18 2020 13:00:00 EDT").getTime();
var myfunc = setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeleft / (1000 * 60 * 60) % 24);
    var minutes = Math.floor(timeleft / (1000 * 60) % 60);
    var seconds = Math.floor(timeleft / 1000 % 60);

    if (days < 0) {
        document.getElementById("d").innerHTML = "00:";
        document.getElementById("h").innerHTML = "00:";
        document.getElementById("m").innerHTML = "00:";
        document.getElementById("s").innerHTML = "00";
    } else {
        document.getElementById("d").innerHTML = pad(days, 2);
        document.getElementById("h").innerHTML = pad(hours, 2);
        document.getElementById("m").innerHTML = pad(minutes, 2);
        document.getElementById("s").innerHTML = pad(seconds, 2);
    }
}, 1000);

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}
