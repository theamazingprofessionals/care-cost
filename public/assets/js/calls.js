$(function () {
    const getAllStateData = procId => {
        $.ajax('/api/avg/' + procId, {
            type: "GET",
        }).then(function (res) {
            console.log(res)
        });
    }




    $(".proc-btn").on("click", function () {
        let procId = $(this).data("proc-id");
        console.log(procId);
        getAllStateData(procId)


    })









});
