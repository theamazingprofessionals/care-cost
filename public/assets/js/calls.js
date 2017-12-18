$(function () {
var procedureFinal;
    function getRankedStateList(procId) {

        $.get('/api/avg/' + procId).then(function (data) {
            //console.log(data);
            let list = "<ol>{{#each data}}<li><button class='state-select' data-state='{{this.state}}' data-id='{{this.procId}}'>{{this.state}}</button></li>{{/each}}</ol>";
            let compiledTemplate = Handlebars.compile(list);
            let html = compiledTemplate({
                data: data
            });
            $("#list-div").empty().append(html);
            $(".procedure-chart").attr('id', procedureFinal);
            drawChart();
        });
    };

    function getProcedureName(procId){
        $.get('/api/procedures/' + procId).then(function(data){
            console.log(data);
            var procedure = data[0].procedureName;
            var temp = procedure.indexOf(" ");
            if (temp !== -1){
                var temp1 = procedure.slice(0, temp);
                var temp2 = procedure.slice(temp+1, procedure.length);
                procedureFinal = temp1.toLowerCase() + "_" + temp2.toLowerCase();
            }
            else {
                procedureFinal = procedure.toLowerCase();
            }
            console.log(procedureFinal);
        })
    }

    function getStateCostData(state, procId) {
        $.get("/api/cost/" + state + "/" + procId).then(function (data) {
            //console.log(data);
        })
    }


    $(".proc-btn").on("click", function () {
        let procId = $(this).data("id");
        getProcedureName(procId);
        getRankedStateList(procId);
    });


    $(".proc-btn").hover(function () {
        let id = $(this).data("id");
        let name = $(this).data("name");
        $.get("/api/mm/" + id).then(function (data) {
            console.log(data);
            console.log(data[0])
            minMaxChart(name, data[0].state, data[0].min, data[1].state, data[1].max)
        })
    })

    $(document).on("click", ".state-select", function () {
        console.log("clicked")
        let state = $(this).data("state").toLowerCase();
        let procId = $(this).data("id");
        getStateCostData(state, procId);
    })



});
