$(document).ready(function() {
    //ADD A BLUE LINE UNDER ACTIVE TAG
    $('.navs').click(function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#tagNav #getHTMLList').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#movieContainer").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });


    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#tagNav #getJSONList').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#movieContainer");
                let htmlStr = "<table>";
                for(let i = 0; i < data.length; i++) {
                    if((i+1) % 5 == 1) {
                      htmlStr += "<tr>";
                    }
                    htmlStr += "<td><img class='show_images' src='" +
                    data[i].url + "' alt='Show Image'/>" +
                    "<div class='overlay'><div class='show_info'><h3>" + data[i].movieName + "</h3>" +
                    "<p>" + data[i].showDate + "</p>" +
                    "<p>" + data[i].showTime + "</p></div></div>" +
                    "</td>";
                    if((i+1) % 5 == 0) {
                      htmlStr += "</tr>";
                    }
                }
                htmlStr += "</table>";
                div.html(htmlStr);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

});
