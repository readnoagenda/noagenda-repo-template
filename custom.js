// Add tweeter links
$(function () {
    $('body.view ul.timestamp').each(function () {
        var $ul = $(this);
        var snippet_id = $ul.parents('div.snippet').attr('id');
        var message = "I'm reading #NoAgenda at " + window.location.protocol + "//" + window.location.host + window.location.pathname + '#' + snippet_id;
        message = encodeURIComponent(message);
        $ul.append(
            $('<li/>').append(
                $('<a target="_blank"/>')
                    .attr('title', 'Tweet link to this No Agenda transcript')
                    .attr('href', 'http://twitter.com/?status=' + message)
                    .text('Tweet')
            )
        );
    });
});
