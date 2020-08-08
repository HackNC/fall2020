$(document).ready(function () {
    $(document).on('click', '.question', function () {
        $(this).children('img').toggleClass('selected');
        $(this.nextElementSibling).toggleClass('selected');
    });

    $.getJSON("/static/assets/faq.json", function (data) {

        var i = 0;

        var $row = $('<div>', { "class": "faq-row" });

        data.forEach(function (section) {
            var $col = $('<div>', { "class": "faq-col" });

            $col.append(
                $('<h3>', {"style": "text-align: center"})
                    .text(section['header'])
            );

            section['questions'].forEach(function (question) {
                $col.append(
                    $('<div>', { "class": "question" }).append(
                        $('<img>', { "src": "static/assets/images/triangle.png" }),
                        $('<h5>').text(question['question'])
                    )
                )
                $col.append(
                    $('<div>', { "class": "answer" }).append(
                        $('<p>').text(question['answer'])
                    )
                )
            });

            $row.append($col);
            if (++i % 2 === 0) {
                $("#faq-container").append($row);
                $row = $('<div>', { "class": "faq-row" });
            }
        });
    });

    $.getJSON("/static/assets/schedule.json", function (data) {

        var $header = $('<div>', { "class": "sch-row" });
        var $tables = $('<div>', {"style": "position: relative;"});

        var i = 0;

        data.forEach(function (date) {
            $header.append(
                $('<button>', {"class": (i == 0 ? "day-selector active" : "day-selector"), "id": "day" + i})
                    .text(date['date'])
                    .on('click', function () {
                        if(!$(this).hasClass('active')) {
                            $('.day-selector').each(function() {
                                $(this).toggleClass('active');
                            });
                            $('.sch-table').each(function() {
                                $(this).toggleClass('active');
                            });
                        }
                    })
            );

            var $table = $('<table>', {"class": (i == 0 ? "sch-table active" : "sch-table"), "id": "table" + i++});
            var $schBody = $('<tbody>');

            $table.append(
                $('<thead>').append(
                    $('<tr>')
                        .append($('<th>', { "style": "width:17.5%; text-align: left;" }).text('Time'))
                        .append($('<th>', { "style": "width:57.5%; text-align: left;" }).text('Event'))
                        .append($('<th>', { 'style': "width:25%; text-align: left;" }).text('Location'))
                )
            );

            var j = 0;

            date['schedule'].forEach(function (element) {
                $schBody.append(
                    $('<tr>', {"class" : (j++ % 2 == 0 ? "table-row-even" : "table-row-odd")})
                        .append($('<td>').html(element['time']))
                        .append($('<td>').html(element['event']))
                        .append($('<td>').html(element['location']))
                )
            });

            $table.append($schBody);
            $tables.append($table);
        });

        $("#schedule-container").append($header);
        $tables.append(
            $('<img>', {"class": "sch-img hide-on-med-and-down", "src": "/static/assets/images/art/kraken.svg"})
        );
        $("#schedule-container").append($tables);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
