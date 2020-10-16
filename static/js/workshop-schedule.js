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
                $expandable = $('<div>', {"class": "to_expand"}).append($('<p>').text(element['description']));
                if (element['resources'] != null) {
                    $ul = $('<ul>');
                    element['resources'].prereqs.forEach(function (prereq) {
                        $ul.append($('<li>').append($('<a>', { "target": "_blank", "href": prereq['link']}).text(prereq['text'])));
                    })
                    $expandable.append($('<h4>').text('Prerequisites:'));
                    $expandable.append($ul);
                    $ul = $('<ul>');
                    element['resources'].resources.forEach(function (prereq) {
                        $ul.append($('<li>').append($('<a>', { "target": "_blank", "href": prereq['link']}).text(prereq['text'])));
                    })
                    $expandable.append($('<h4>').text('Resources:'));
                    $expandable.append($ul);
                }
                
                $schBody.append(
                    $('<tr>', { "class": (j++ % 2 == 0 ? "table-row-even" : "table-row-odd") })
                        .append($('<td>', { "style": "font-weight: bold; width: 15%;" }).html(element['time']))
                        .append($('<td>', { "style": "width: 52.5%;"}).append($('<p>', {"class": "expandable" }).text(element['event']).click(function () {
                            $(this).toggleClass('active')
                            $(this).next().toggleClass('active')
                        })).append($expandable))
                        .append($('<td>', { "style": "width: 11.25%;" }).html(element['host']))
                        .append($('<td>', { "style": "width: 11.25%;" }).html(element['difficulty']))
                        .append($('<td>', { "style": "width: 10%;" }).html(element['location']))
                )
            });

            $table.append($schBody);
            $tables.append($header);
            $tables.append($table);
        });

        $("#schedule-container").append($tables);
    });
});