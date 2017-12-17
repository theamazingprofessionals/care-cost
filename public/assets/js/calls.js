$(function () {

    function getRankedStateList(procId) {

        $.get('/api/avg/' + procId).then(function (data) {
            let list = "<ol>{{#each data}}<li><button data-state='{{this.state}}' data-id='{{this.procId}}'>{{this.state}}</button></li>{{/each}}</ol>";
            let compiledTemplate = Handlebars.compile(list);
            let html = compiledTemplate({
                data: data
            });
            $("#list-div").html(html);
        })
    }


    $(".proc-btn").on("click", function () {
        let procId = $(this).data("id");
        getRankedStateList(procId)
    });


});
