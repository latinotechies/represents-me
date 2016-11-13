var KC="AIzaSyCvPmleqHk27z2USPdSyZm30O2frZRyKKQ"
var voterInfo = "";


// $("#search").click(function(e) {
//   e.preventDefault();
//   console.log("here i am");
//   console.log($("#userAddy").val());
//   voterInfo = $("#userAddy").val();
// }).get(addyRequest, function(data, status) {
//     console.log(addyRequest);
//     console.log(data);
//     console.log(status);
//     console.log("my info is: " + voterInfo);
//   })

$("#search").click(function(e){
  e.preventDefault();
  voterInfo = $("#userAddy").val();
  var addyRequest = "https://www.googleapis.com/civicinfo/v2/representatives?address=" + voterInfo + "&key=" + KC;

    var data = {};
    $.getJSON(addyRequest, function(data, status){
      console.log("Data: " + data + "\nStatus: " + status);
      $.each(data.officials, function(i, ofc) {
        var ofcName = ofc.name;
        console.log(i);
        console.log(ofc);
        console.log(ofc.photoUrl);

        $( "#officialCard" ).clone().prependTo($("body").find(".row")).attr("id", "officialCard" + i);
          $( "#officialName" ).text(ofcName);

          if (ofc.phones) {
            $("#officialPhone").attr("href", "tel:" + ofc.phones[0]);
          };
          if (ofc.photoUrl) {
            $("#officialPic").prop("src", ofc.photoUrl);
          };

          if (ofc.urls) {
            $("#officialSite").attr("href", ofc.urls[0]);
          };
      })
    });
});
