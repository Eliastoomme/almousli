$(document).ready(function() {
    $(".Pbtn").click(function() {
        $('.filter').removeClass('none')
        var name = $(this).attr("data-filter")
        if (name == 'one') {
            $('.filter').show("3000")
        } else {
            $(".filter").not("." + name).hide("3000")
            $(".filter").filter("." + name).show("3000")
        }
    })
    $(".Pnavigation a").click(function() {
        $(this).addClass("active").siblings().removeClass("active")
    })
})

var ProductsNav = document.getElementById('ProdNav')
var ShowMoreBtn = document.getElementById('moreBtn')
var ShowLessBtn = document.getElementById('lessBtn')
var Products = document.querySelectorAll('.Pnavigation a')
var ProdImgs = document.querySelectorAll('.ProcContainer .filter')
for (i = 8; i < ProdImgs.length; i++) {
    ProdImgs[i].classList.add('none')
}
ShowMoreBtn.addEventListener('click', function() {
    ShowMoreBtn.classList.add('none')
    ShowLessBtn.classList.remove('none')
    for (i = 5; i < Products.length; i++) {
        Products[i].classList.remove('none')
    }
})
ShowLessBtn.addEventListener('click', function() {
    ShowMoreBtn.classList.remove('none')
    ShowLessBtn.classList.add('none')
    for (i = 5; i < Products.length; i++) {
        Products[i].classList.add('none')
    }
})

$(window).resize(function() {
    if ($(window).width() <= 400) {
        $('.filter').css("width", "130")
        $('.filter').css("height", "150")
    } else {
        $('.filter').css("width", "250")
        $('.filter').css("height", "200")
    }

})

/*
$(".sm").hover(function() {
        $(this).css("transform", "rotateX(180deg)")
    }, function() {
        $(this).css("transform", "rotateX(360deg)")
    })
    
    $(".filter").hover(function() {
        $(this).attr("data-aos", "fade-down")
    }, function() {
        $(this).attr("data-aos", "")
    })

    */

/*
$(window).resize(function() {
    if ($(window).width() <= 768) {
        $('.getRemoved').addClass('none')
        $('.getEdited').removeClass('col-6').addClass('col')
        $('.DownImg').css("height", "50")
        $('.AboutImg').css("height", "200")
        $('.no-fade').attr("data-aos", "fade-up-right")
    } else {
        $('.getRemoved').removeClass('none')
        $('.getEdited').addClass('col-6').removeClass('col')
        $('.DownImg').css("height", "120")
        $('.AboutImg').css("height", "400")
        $('.no-fade').attr("data-aos", "fade-up-right")
    }
    /*
        $(location).attr("href", "./mobileIndex.html")
    } else if ($(window).width() > 768) {
        $(location).attr("href", "./index.html")
    }
})
 */