var d = new Date();
var months = ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];
var dates =["Chủ nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"]
document.getElementById("date").innerHTML =dates[d.getDay()]+', '+ months[d.getMonth()]+ ' ngày '+ d.getDate()  + ', ' + d.getFullYear();

$(document).ready(function(){
    $(".icon-bars").click(function(){
      if($(".header-menu-menu").hasClass("hide")){
        // $(".menu-logo-right").removeClass("hide");
        $(".header-menu-menu").removeClass("hide");
        $(".icon-bars").hide();
      }
    });
  $("#btnClose").click(function(){
    console.log('xx')
    if(!$(".header-menu-menu").hasClass("hide")){
      // $(".menu-logo-right").addClass("hide");
      $(".header-menu-menu").addClass("hide");
      $(".icon-bars").show();
    }
  })
});