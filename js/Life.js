function otherF(){var tag_cloud=$('.blog-post-page-tags>a');tag_cloud.each(function(){var Cnum=9;var Crand=parseInt(Math.random()*Cnum);$(this).addClass("tag-could"+Crand)});$('.blog-main').css('min-height',$(window).height());$('.blog-post-page-content input').addClass('form-control');function backTop(){var DomscrollTop=$(document).scrollTop();if(DomscrollTop>450){$(".retop").css("display","block")}else{$(".retop").css("display","none")}setTimeout(backTop)}backTop();$(".retop").click(function(){$('html,body').animate({scrollTop:0},400)});function blogTitle(){var DomscrollTop=$(document).scrollTop();if(DomscrollTop>10){$('.blog-sidebar-title').addClass('blog-sidebar-title-shadow')}else{$('.blog-sidebar-title').removeClass('blog-sidebar-title-shadow')}setTimeout(blogTitle)}blogTitle();$(".blog-header-navbar-btn").click(function(){$(".blog-header-navbar").slideToggle("slow")});$('.tag-could,.blog-post-page-readmore>a,.blog-post-page-tags>a,.blog-sidebar-icon>ul>li>a,.btn').tooltip();$(".blog-post-page-content img:not('.no-lightbox')").each(function(){var imgSrc=$(this).attr('src');$(this).wrap("<a class='img-a img-group' data-fancybox='group' href='javascript:;'></a>");$(this).parent().attr('href',imgSrc)});$(".blog-post-page-content a:not('.img-a')").attr('target','_blank')}