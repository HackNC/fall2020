$(document).ready(function () {
    $.getJSON("../static/assets/schedule.json", function (data) {

        var $tables = $('<div>');

        data.forEach(function (date) {
            var $table = $('<table>');
            var $schBody = $('<tbody>');

            $table.append(
                $('<h3>').text(date['date'])
            );

            $table.append(
                $('<tr>')
                    .append($('<th>', { "style": "width:17.5%; text-align: left;" }).text('Time (EST)'))
                    .append($('<th>', { 'style': "width:25%; text-align: left;" }).text('Type'))
                    .append($('<th>', { "style": "width:57.5%; text-align: left;" }).text('Event'))
            );


            var j = 0;

            date['schedule'].forEach(function (element) {
                $schBody.append(
                    $('<tr>', { "class": (j++ % 2 == 0 ? "table-row-even" : "table-row-odd") })
                        .append($('<td>').html(element['time']))
                        .append($('<td>').html(element['type'] + " (click me!)").append($('<div>').html("This will be used to display info about workshops on the workshop specific schedule."))
                        .click(function () {
                            $(this).children().toggleClass('active')
                        }))
                        .append($('<td>').html(element['event']))
                )
            });

            $table.append($schBody);
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
