$(document).ready(function() {
	
	var dir = "F:/userbenchmark_data/data";
	var fileextension = ".png";
	$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //Lsit all png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            $("body").append($("<img src=" + dir + filename + "></img>"));
        });
    }
})
;