function viewport(){var a=window,b="inner";return"innerWidth"in window||(b="client",a=document.documentElement||document.body),{width:a[b+"Width"],height:a[b+"Height"]}}function toggle_main_menu(){if(viewport().width<=window.xs_screen_max){var a=$("#left-sidebar #mobile-menu-icon"),b=$("#left-sidebar #main-menu");b.is(":visible")?b.addClass("menu_closed_on_xs").removeClass("menu_opened_on_xs").slideUp("fast",function(){a.removeClass("active")}):b.addClass("menu_opened_on_xs").removeClass("menu_closed_on_xs").slideDown("fast",function(){a.addClass("active")})}}function main_menu_visiblity_on_resize(){var a=$("#left-sidebar #main-menu");viewport().width>window.xs_screen_max?a.hasClass("menu_closed_on_xs")&&a.show():(a.hasClass("menu_closed_on_xs")&&a.hide(),a.hasClass("menu_opened_on_xs")&&a.show())}function sections_content_vertical_position(){if(viewport().width>window.xs_screen_max){var a=$(window).height(),b=.8*a;$("#main-content .section-wrapper").each(function(){var a=$(this).find(".content-wrapper"),c=a.height();$(this).hasClass("active")?!0:!1,a.css(c>b?{position:"static"}:{position:"absolute"})})}else $("#main-content .section-wrapper .content-wrapper").css({position:"static"})}function initialise_general_links_click_events(){$("a.link-scroll").click(function(a){var b=$(this).attr("href");if(void 0===b||""==b||"#"==b)return a.preventDefault?a.preventDefault():a.returnValue=!1,!1;var c=b.substr(0,1);if("#"==c){if(!($(b).length>0))return!1;$("#main-content").addClass("same_page_link_in_action");var d=$(b).offset().top;$("html, body").stop().animate({scrollTop:d},1500,"easeInOutCubic",function(){$("#main-content").removeClass("same_page_link_in_action"),update_active_sections_on_scroll()}),a.preventDefault?a.preventDefault():a.returnValue=!1}})}function initialise_main_menu_click_events(){$("#main-menu .menu-item > a").off("click"),$("#main-menu .menu-item > a").prop("onclick",null),$("#main-menu .menu-item > a").click(function(a){var b=$(this).attr("href"),c=b.substr(0,1),d=$(this).parent(".menu-item"),e=d.attr("id");if(d.hasClass("scroll")&&"#"==c){var f=void 0!==e&&""!=e?e:"";$("#main-content").addClass("same_page_link_in_action");var g=viewport().width>window.xs_screen_max?!0:!1;scroll_to_section(b,f,g),a.preventDefault?a.preventDefault():a.returnValue=!1}else if(void 0===b||""==b||"#"==b)return a.preventDefault?a.preventDefault():a.returnValue=!1,!1})}function scroll_to_section(a,b,c){if(void 0===a||""==a)return!1;var d=$("#main-content "+a+".section-wrapper");if(0==d.length||d.hasClass("active"))return!1;var e=d.offset().top;$("html, body").stop().animate({scrollTop:e},1500,"easeInOutCubic",function(){$("#main-content").removeClass("same_page_link_in_action")}),set_section_to_active(a,b,"",c)}function set_section_to_active(a,b,c,d){if(void 0!==a&&""!=a){var e=$("#main-content "+a+".section-wrapper");$("#main-menu .menu-item").removeClass("active"),$("#main-content .section-wrapper").removeClass("active");var f=void 0!=b&&""!=b?$("#main-menu #"+b+".menu-item"):"";if(""!=f&&0!=f.length)f.addClass("active");else{var g=a.substr(1);$("#main-menu #menu-item-"+g+".menu-item").addClass("active")}if(e.addClass("active"),toggle_top_icon_in_main_menu(),0!=d){var h=e.attr("data-custom-background-img"),i=void 0!==h&&""!=h?h:$("#outer-background-container").attr("data-default-background-img");if(void 0!==i&&""!=i){var j=1!=c?1500:550;$("#outer-background-container").backstretch(i,{fade:j})}}}}function get_all_section_wrappers_in_page(){var a=$("#main-content").find(".section-wrapper");return a}function update_active_sections_on_scroll(a,b){var c=void 0!==a&&""!=a?a:$("#main-content").find(".section-wrapper"),b=b!==b&&""!=b?b:.25*$(window).height(),d=$(document).scrollTop(),e=c.map(function(){var a=$(this).offset().top-b,c=$(this).height(),e=a+c;return d>a&&e>=d?this:void 0});if(void 0!==e&&""!=e){var f="#"+e.attr("id");e.hasClass("active")||set_section_to_active(f,"",!0)}}function toggle_top_icon_in_main_menu(){var a=$("#main-menu #menu-item-intro");a.hasClass("active")?a.css({opacity:0}).addClass("main-menu-top-icon-active"):a.css({opacity:.7}).removeClass("main-menu-top-icon-active")}function preload_section_backgrounds(){var a=get_all_section_wrappers_in_page();a.length>0&&a.each(function(){var a=$(this).attr("data-custom-background-img");if(void 0!==a&&""!=a){var b=new Image;b.src=a}})}function add_clear_items_to_fix_grid_items_different_heights_issue(){if($("#main-content .grid .grid-item").length>0){var a=$("#main-content .grid");if(a.hasClass("clearfix-for-2cols"))return a.find(".grid-item:nth-of-type(2n+2)").after('<article class="clearfix"></article>'),!1;if(a.hasClass("clearfix-for-3cols"))return a.find(".grid-item:nth-of-type(3n+3)").after('<article class="clearfix"></article>'),!1}}function effect_fade_out_inactive_grid_items(){$("#main-content .projects-grid.effect-fade-inactive").length>0&&$("#main-content .projects-grid.effect-fade-inactive").each(function(){var a=$(this);a.find(".grid-item .item-content").hover(function(){var b=$(this);b.css({opacity:1}),a.find(".grid-item .item-content").not(b).css({opacity:.3})},function(){var a=$(this);a.css({opacity:.3})}),a.hover(function(){},function(){setTimeout(function(){a.find(".grid-item .item-content").css({opacity:1})},200)})})}function set_height_of_parent_content_wrappers(){var a=$("#main-content .max-height");a.each(function(){var a=$(this).parents(".content-wrapper");if(a.length>0){a.parents(".section-wrapper").addClass("modified-height");var b=$(this).attr("data-height-percent");a.css(void 0===b||""==b||isNaN(b)?{height:"80%"}:{height:b+"%"})}})}function set_equal_height_to_all_carousel_slides_on_small_displays(){var a=$("#main-content .carousel");a.each(function(){var a=void 0===$(this).attr("data-height-percent")||""==$(this).attr("data-height-percent")||isNaN($(this).attr("data-height-percent"))?80:$(this).attr("data-height-percent"),b=a/100*viewport().height,c=$(this).find(".item .carousel-text-content");$(this).find(".item:not(.active)").css({opacity:"0",position:"absolute",display:"block"}),c.css({height:"auto"});var d=[];c.each(function(){d.push($(this).height())});var e=Math.max.apply(Math,d)+40;$(this).find(".item:not(.active)").attr("style",""),viewport().width<=window.sm_screen_max||e>=b?($(this).parents(".section-wrapper").addClass("modified-height"),c.height(e)):($(this).parents(".section-wrapper").removeClass("modified-height"),$(this).removeClass("slides-height-modified").find(".item .carousel-text-content").css({height:"100%"}))})}function populate_and_open_modal(a,b,c,d){var e=$("#common-modal.modal"),f=e.find(".modal-body"),g=$("#"+b),h="";if(void 0!==d&&""!=d&&(h=d),f.length>0&&g.length>0){$("#outer-container").fadeTo("fast",.2);var i=($(document).scrollTop(),g.html());f.empty().html(i),e.modal(),g.find("a[data-lightbox]").each(function(){var a=$(this).attr("data-lightbox");$(this).removeAttr("data-lightbox"),$(this).attr("data-mod-lightbox",a)}),""!=h&&e.addClass(h),e.on("shown.bs.modal",function(){if(position_modal_at_centre(),void 0!==c&&""!=c&&$("#common-modal.modal").find(c).length>0){var a=$("#common-modal.modal").find(c).offset().top;$("#common-modal.modal").stop().animate({scrollTop:a},800,"easeInOutCubic")}}),e.on("hide.bs.modal",function(){$("#outer-container").fadeTo("fast",1),$("#"+b).find("a[data-mod-lightbox]").each(function(){var a=$(this).attr("data-mod-lightbox");$(this).removeAttr("data-mod-lightbox"),$(this).attr("data-lightbox",a)})}),e.on("hidden.bs.modal",function(){f.empty(),""!=h&&e.removeClass(h)})}return a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function position_modal_at_centre(){var a=$(".modal");if(a.length>0&&a.is(":visible")){var b=a.find(".modal-dialog"),c=(b.width(),b.height()),d=c+70<viewport().height?!0:!1;if(viewport().width>window.sm_screen_max&&1==d){var e=(viewport().height-c)/2;b.css({"margin-top":e+"px","margin-bottom":"20px"})}else b.removeAttr("style")}}function go_to_top_visibility(){var a=$("#go-to-top");if(a.length>0){var b=$(document).scrollTop();b<viewport().height?a.removeClass("active"):a.addClass("active")}}function scroll_to_top(){$("html, body").stop().animate({scrollTop:0},1500,"easeInOutCubic",function(){$("#go-to-top").removeClass("active")})}function load_images(a,b,c){var d=$("."+a);if(d.length>0){var e=new Array;d.each(function(){var a=$(this).attr("data-img-src");if(void 0!==a&&""!=a){var b=new Array;b.img_object=$(this),b.img_src=a,e.push(b)}});var f=e.length;for(i=0;f>i;i++){var g=new Image;g.src=e[i].img_src,e[i].img_object.attr("src",e[i].img_src),1==b&&e[i].img_object.removeClass(a),1==c&&i==f-1&&(!jQuery.browser.mobile||viewport().width>window.xs_screen_max)&&(g.onload=function(){sections_content_vertical_position()})}}}function validate_and_submit_forms(a){var b=void 0!==a&&a.length>0?a:$("form.validate-form");b.each(function(){var a=$(this);a.find(".validate-field").each(function(){$(this).change(function(){if($(this).siblings(".alert").fadeOut("fast",function(){$(this).remove()}),""!=$(this).val().trim()){var b=validate_fields(a,$(this));if(b.length>0&&void 0!==b[0].message&&""!=b[0].message&&"success"!=b[0].message){var c='<div class="alert">'+b[0].message+"</div>";$(this).after(c),$(this).siblings(".alert").fadeIn("fast")}}})}),a.find("#form-captcha-refresh").click(function(){a.find("#form-captcha-img").replaceWith('<img id="form-captcha-img" src="assets/php/form_captcha/captcha_img.php">'),a.find("#form-captcha").val("")}),a.submit(function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,$(this).find(".form-loader").fadeIn("fast");var c=$(this).attr("action");if(void 0===c&&""==c)return!1;$(this).find(".alert").fadeOut("fast",function(){$(this).remove()}),$(this).find(".form-general-error-container").fadeOut("fast",function(){$(this).empty()});var d=!1;return $(this).find(".validate-field").each(function(){var b=validate_fields(a,$(this));if(b.length>0&&void 0!==b[0].message&&""!=b[0].message&&"success"!=b[0].message){var c='<div class="alert">'+b[0].message+"</div>";$(this).after(c),$(this).siblings(".alert").fadeIn("fast"),d=!0}}),1==d?($(this).find(".form-loader").fadeOut("fast"),!1):void $.ajax({type:"POST",url:c,data:$(this).serialize(),dataType:"html",success:function(b){a.find(".form-loader").fadeOut("fast");var c="success"==b?!0:!1,d="captcha"==b?!1:!0,e="";switch(b){case"success":e="Form submitted successfully.";break;case"captcha":e="Incorrect text entered. (Case-sensitive)";break;case"incomplete":e="Please fill in all required fields.";break;case"error":e="An error occured. Please try again later."}var f='<div class="alert ';f+=1==c?"success":"error",f+='">'+e+"</div>",d?a.find(".form-general-error-container").html(f).fadeIn("fast",function(){$(this).delay(1e4).fadeOut("fast",function(){$(this).html("")})}):(a.find("#form-captcha").parent(".form-group").append(f),a.find("#form-captcha").siblings(".alert").fadeIn("fast")),a.find("#form-captcha-img").replaceWith('<img id="form-captcha-img" src="assets/php/form_captcha/captcha_img.php">'),a.find("#form-captcha").val(""),1==c&&a.find(".form-control").val("")},error:function(){a.find(".form-loader").fadeOut("fast");var b='<div class="alert">An error occured. Please try again later.</div>';a.find(".form-general-error-container").html(b).fadeIn("fast")}})})})}function validate_fields(a,b){if(void 0!==a&&a.length>0){var c=void 0!==b&&b.length>0?b:a.find(".validate"),d=new Array;return c.each(function(){var a=$(this).attr("data-validation-type"),b=$(this).hasClass("required"),c=$(this).val().trim(),e=new Array;e.field_object=$(this),e.message="success",1!=b||""!=c&&null!==c&&void 0!==c||(e.message="This field is required"),"string"==a&&""!=c&&null!==c&&void 0!==c?null==c.match(/^[a-z0-9 .\-]+$/i)&&(e.message="Invalid characters found."):"email"==a&&""!=c&&null!==c&&void 0!==c?null==c.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)&&(e.message="Please enter a valid email address."):"phone"==a&&""!=c&&null!==c&&void 0!==c&&null==c.match(/^\(?\+?[\d\(\-\s\)]+$/)&&(e.message="Invalid characters found."),d.push(e)}),d}}function fixed_bg_image_dimensions_on_mobile(){var a=$("#outer-background-container");if(a.length>0){var b=a.attr("data-default-background-img");if(void 0!==b&&""!=b)if(jQuery.browser.mobile){var c=viewport().height+.1*viewport().height,d=(viewport().width+.1*viewport().width,new Image);d.src=b,0==$("#mobile-bg-fix-image").length&&a.before('<div id="mobile-bg-fix-image"></div>'),$("#mobile-bg-fix-image").css({"min-height":c+"px","min-width":"100%","background-image":"url("+b+")","background-position":"center center","background-repeat":"no-repeat","background-attachment":"fixed","background-size":"auto "+c+"px"}),a.css({opacity:"0"})}else $("#mobile-bg-fix-image").remove(),a.css({opacity:"1"})}}function contact_form_IE9_placeholder_fix(){var a=$("form");a.each(function(){$(this),$(this).find(".form-control").each(function(){var a=$(this).attr("placeholder");void 0!==a&&""!=a&&($(this).val(a),$(this).focus(function(){$(this).val()==a&&$(this).val("")}),$(this).blur(function(){""==$(this).val()&&$(this).val(a)}))})})}!function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera),window.xs_screen_max=768,window.sm_screen_max=992,angular.module("lelyvitoweddingApp",["ngAnimate","ui.router","firebase","angular-loading-bar","angulartics","angulartics.google.analytics"]).constant("$",window.$).constant("LLVWD_TITLE"," | The Wedding of Lely & Vito").config(["$stateProvider","$urlRouterProvider","LLVWD_TITLE",function(a,b,c){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/home.html",data:{pageTitle:"The Wedding of Lely & Vito"}}).state("invitation",{url:"/invitation",templateUrl:"views/invitation.html",data:{pageTitle:"Invitation"+c}}).state("location",{url:"/location",templateUrl:"views/location.html",data:{pageTitle:"Location"+c}}).state("transportation",{url:"/transportation",templateUrl:"views/transportation.html",data:{pageTitle:"Transportation"+c}}).state("rsvp",{url:"/rsvp",controller:"RSVPCtrl",templateUrl:"views/rsvp.html",data:{pageTitle:"RSVP"+c}}).state("about",{url:"/about",controller:"AboutCtrl",templateUrl:"views/about.html",data:{pageTitle:"About Us"+c}}).state("aboutVito",{url:"/about/vito",templateUrl:"views/about-vito.html",data:{pageTitle:"Vito's Story"+c}}).state("aboutLely",{url:"/about/lely",templateUrl:"views/about-lely.html",data:{pageTitle:"Lely's Story"+c}}).state("album",{url:"/album",controller:"AlbumCtrl",templateUrl:"views/album.html",data:{pageTitle:"Album"+c}})}]).run(["$rootScope","$state",function(a){a.$on("$stateChangeStart",function(b,c){a.state=c})}]),angular.module("lelyvitoweddingApp").directive("llvwdBackstretch",["$","$timeout",function(a){return{restrict:"EA",link:function(){a.backstretch("images/save-lg.jpg")}}}]),angular.module("lelyvitoweddingApp").directive("llvwdReceptionMap",["$","$timeout",function(){return{restrict:"EA",link:function(){var a=[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],b=new google.maps.LatLng(-7.811642,112.026139),c=new google.maps.InfoWindow({content:'<div class="gmaps-popup"><p>Lokasi Akad</p><address>Jl. Masjid Al Huda 8<br>Kediri - Jawa Timur<br><a href="https://maps.google.com/maps?q=Lokasi%20Akad%20Nikah%20Lely%26Vito!@-7.811642,112.026139" target="_blank">View on Google Maps</a></div>'}),d=new google.maps.LatLng(-7.806795,112.042286),e=new google.maps.InfoWindow({content:'<div class="gmaps-popup"><p>Lokasi Resepsi</p><address>Gedung Bhagawanta Bhari<br>Jl. Pamenang 1<br>Kediri - Jawa Timur<br><a href="https://maps.google.com/maps?q=Lokasi%20Resepsi%20Nikah%20Lely%26Vito!@-7.806795,112.042286" target="_blank">View on Google Maps</a></div>'}),f={zoom:14,center:d,mapTypeId:google.maps.MapTypeId.ROADMAP,styles:a},g=new google.maps.Map(document.getElementById("map"),f),h=new google.maps.Marker({position:b,map:g,title:"Lokasi Akad!",animation:google.maps.Animation.DROP}),i=new google.maps.Marker({position:d,map:g,title:"Lokasi Resepsi!",animation:google.maps.Animation.DROP});c.open(g,h),e.open(g,i),google.maps.event.addListener(i,"click",function(){e.open(g,i)}),google.maps.event.addListener(h,"click",function(){e.open(g,h)})}}}]),angular.module("lelyvitoweddingApp").directive("llvwdSuperbox",["$","$timeout",function(a){return{restrict:"EA",scope:{images:"="},templateUrl:"scripts/directives/llvwd-superbox.html",link:function(){a(".superbox").SuperBox()}}}]),angular.module("lelyvitoweddingApp").controller("AboutCtrl",["$scope",function(a){a.vito="Vito Ardhiyanto",a.lely="Lely Mufika"}]),angular.module("lelyvitoweddingApp").controller("AlbumCtrl",["$scope",function(a){a.images=[];for(var b=1;22>=b;++b)a.images.push(b)}]),angular.module("lelyvitoweddingApp").controller("RSVPCtrl",["$scope","$firebase",function(a,b){var c=new Firebase("https://lely-vito.firebaseio.com/rsvp");a.allRSVP=b(c).$asArray(),a.isRSVPLoading=!0,a.currentUserRSVP=2;var d=function(){for(var b=0,c=a.allRSVP.length;c>b;++b)if(a.user.id===a.allRSVP[b].user.id)return void(a.currentUserRSVP=a.allRSVP[b].rsvp)},e=function(b,c){for(var d=0,e=a.allRSVP.length;e>d;++d)if(a.user.id===a.allRSVP[d].user.id)return a.allRSVP[d].rsvp=c,void a.allRSVP.$save(d)},f=function(){if(a.allRSVP&&a.user)for(var b=0,c=a.allRSVP.length;c>b;++b)if(a.user.id===a.allRSVP[b].user.id)return a.allRSVP[b];return!1};a.allRSVP.$loaded().then(function(){a.isRSVPLoading=!1,a.user&&d()}),a.updateRSVP=function(){a.allRSVP&&d()},a.$watch("currentUserRSVP",function(b){angular.isDefined(b)&&2!==b&&(console.log("currentUserRSVP changed",b),f()?e(a.user.id,b):a.allRSVP.$add({rsvp:b,user:a.user,timestamp:Firebase.ServerValue.TIMESTAMP}))}),a.rsvpMatcher=function(a){return function(b){return b.rsvp===a}},a.countRSVP=function(b){var c=0;return angular.forEach(a.allRSVP,function(a){a.rsvp===b&&++c}),c};var g=new Firebase("https://lely-vito.firebaseio.com"),h=new FirebaseSimpleLogin(g,function(b,c){b?(console.log("errorr",b),a.isLoggedIn=!1):c?a.$apply(function(){a.isLoggedIn=!0,a.user=c,a.updateRSVP()}):(console.log("user is logged out"),a.isLoggedIn=!1)});a.loginFB=function(){h.login("facebook")},a.loginTW=function(){h.login("twitter")}}]);