$(document).ready(function () {
    document.getElementById('nessie').onclick = function () {
        document.getElementById('nessie-modal').style.display = "block";
    }

    document.getElementById('boatsquatch').onclick = function () {
        document.getElementById('boatsquatch-modal').style.display = "block";
    }

    document.getElementById('krakenlake').onclick = function () {
        document.getElementById('krakenlake-modal').style.display = "block";
    }

    document.getElementById('mothman').onclick = function () {
        document.getElementById('mothman-modal').style.display = "block";
    }

    document.getElementById('yeti').onclick = function () {
        document.getElementById('yeti-modal').style.display = "block";
    }

    document.getElementById('ram').onclick = function () {
        document.getElementById('ram-modal').style.display = "block";
    }

    document.getElementById('mobile-get-involved').onclick = function () {
        document.getElementById('get-involved-modal').style.display = "block";
    }

    document.getElementById('get-involved').onclick = function () {
        document.getElementById('get-involved-modal').style.display = "block";
    }


    $('.close').on('click', function () {
        $(this).closest('.modal').css("display", "none");
    })

    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    }

    $.getJSON("/static/assets/faq.json", function (data) {
        data.forEach(function (question) {
            var $faq = $('<div>');
            var $header = $('<h2>')

            $header.append($('<img>', { "src": "static/assets/images/art/lantern.svg" }));
            $header.append(question['question']);
            $faq.append($header);
            $faq.append(
                $('<p>')
                    .html(question['answer'])
            )
            $('#faq-container').append($faq);
        });
    });

    // $.getJSON("/static/assets/schedule.json", function (data) {

    //     var $header = $('<div>', { "class": "sch-row" });
    //     var $tables = $('<div>', { "style": "position: relative;" });

    //     var i = 0;

    //     data.forEach(function (date) {
    //         $header.append(
    //             $('<button>', { "class": (i == 0 ? "day-selector active" : "day-selector"), "id": "day" + i })
    //                 .text(date['date'])
    //                 .on('click', function () {
    //                     if (!$(this).hasClass('active')) {
    //                         $('.day-selector').each(function () {
    //                             $(this).toggleClass('active');
    //                         });
    //                         $('table').each(function () {
    //                             $(this).toggleClass('active');
    //                         });
    //                     }
    //                 })
    //         );

    //         var $table = $('<table>', { "class": (i == 0 ? "active" : ""), "id": "table" + i++ });
    //         var $schBody = $('<tbody>');

    //         $table.append(
    //             $('<thead>').append(
    //                 $('<tr>')
    //                     .append($('<th>', { "style": "width:17.5%; text-align: left;" }).text('Time'))
    //                     .append($('<th>', { "style": "width:57.5%; text-align: left;" }).text('Event'))
    //                     .append($('<th>', { 'style': "width:25%; text-align: left;" }).text('Location'))
    //             )
    //         );

    //         var j = 0;

    //         date['schedule'].forEach(function (element) {
    //             $schBody.append(
    //                 $('<tr>', { "class": (j++ % 2 == 0 ? "table-row-even" : "table-row-odd") })
    //                     .append($('<td>').html(element['time']))
    //                     .append($('<td>').html(element['event']))
    //                     .append($('<td>').html(element['location']))
    //             )
    //         });

    //         $table.append($schBody);
    //         $tables.append($table);
    //     });

    //     $("#schedule-container").append($header);
    //     $tables.append(
    //         $('<img>', { "class": "sch-img hide-on-med-and-down", "src": "/static/assets/images/art/kraken.svg" })
    //     );
    //     $("#schedule-container").append($tables);
    // });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
