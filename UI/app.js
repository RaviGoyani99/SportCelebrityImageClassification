Dropzone.autoDiscover = false;

function init() {
    let dz = new Dropzone("#dropzone", {
        url: "/",
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Some Message",
        autoProcessQueue: false
    });
    
    dz.on("addedfile", function() {
        if (dz.files[1] != null) {
            dz.removeFile(dz.files[0]);
        }
    });

    dz.on("complete", function (file) {
        let imageData = file.dataURL;
        
        var url = "/api/classify_image";

        $.post(url, {
            image_data: file.dataURL
        }, function(data, status) {
            console.log(data);
            if (!data || data.length == 0) {
                $("#resultHolder").hide();
                $("#dynamicTablesContainer").hide();
                $("#error").show();
                return;
            }

            // Clear previous results
            $("#resultHolder").hide();
            $("#dynamicTablesContainer").empty().show();
            $("#error").hide();

            // Process each entry in the data array
            data.forEach((entry) => {
                // Check if any probability score is greater than 70
                let showTable = entry.class_probability.some(probability => probability > 70);

                if (showTable) {
                    // Display the identified celebrity image
                    $("#resultHolder").append($(`[data-player="${entry.class}"]`).html());

                    // Create a table for this entry
                    let tableHtml = `
                        <div class="table-container">
                            <h5>Results for ${entry.class.replace("_", " ")}</h5>
                            <table class="classTable">
                                <tr>
                                    <th>Player</th>
                                    <th>Probability Score</th>
                                </tr>`;

                    for (let personName in entry.class_dictionary) {
                        let index = entry.class_dictionary[personName];
                        let probabilityScore = entry.class_probability[index];
                        tableHtml += `
                            <tr>
                                <td>${personName.replace("_", " ")}</td>
                                <td>${probabilityScore.toFixed(2)}</td>
                            </tr>`;
                    }

                    tableHtml += `</table></div>`;
                    $("#dynamicTablesContainer").append(tableHtml);
                }
            });

            // Check if no tables were created and show error if true
            if ($("#dynamicTablesContainer").is(':empty')) {
                $("#dynamicTablesContainer").hide();
                $("#error").show();
            }
        });
    });

    $("#submitBtn").on('click', function (e) {
        dz.processQueue();
    });
}

$(document).ready(function() {
    console.log("ready!");
    $("#error").hide();
    $("#resultHolder").hide();
    $("#dynamicTablesContainer").hide();

    init();
});
