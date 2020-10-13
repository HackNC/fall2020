$(document).ready(function () {
    $.getJSON("../../static/assets/workshop_schedule.json", function (data) {

        var $tables = $('<div>');

        data.forEach(function (date) {
            var $table = $('<table>');
            var $schBody = $('<tbody>');

            var $header = $('<h2>').text(date['date']);

            $table.append(
                $('<tr>')
                    .append($('<th>').text('Time (EST)'))
                    .append($('<th>').text('Workshop'))
                    .append($('<th>').text('Host'))
                    .append($('<th>').text('Difficulty'))
                    .append($('<th>').text('Location'))
            );

            var j = 0;

            date['schedule'].forEach(function (element) {
                $schBody.append(
                    $('<tr>', { "class": (j++ % 2 == 0 ? "table-row-even" : "table-row-odd") })
                        .append($('<td>', { "style": "font-weight: bold; width: 15%;" }).html(element['time']))
                        .append($('<td>', { "style": "width: 52.5%;", "class": "expandable" }).html(element['event']).append($('<div>').html(element['description']))
                        .click(function () {
                            $(this).toggleClass('active')
                            $(this).children().toggleClass('active')
                        }))
                        .append($('<td>', { "style": "width: 12.5%;" }).html(element['host']))
                        .append($('<td>', { "style": "width: 7.5%;" }).html(element['difficulty']))
                        .append($('<td>', { "style": "width: 12.5%;" }).html(element['location']))
                )
            });

            $table.append($schBody);
            $tables.append($header);
            $tables.append($table);
        });

        $("#schedule-container").append($tables);
    });
});