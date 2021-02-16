$(document).ready(function () {
    let divWidth = $('#sliderBoard').width();
    let imgCount = $('#content li').length;
    // let content_left = document.getElementById('content_left');
    // let content_right = document.getElementById('content-right');


    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append('<li></li>');
    }
    $('#contentButton li:nth-child(1)').addClass('clickMe');

    $('#content li').width(divWidth);
    $('#content').width(divWidth * imgCount);

    let index;
    $('#contentButton li').click(function () {
        // alert($(this).index());
        index = $(this).index();

        $('#content').animate({
            left: divWidth * index * -1,
        });

        $(this).addClass('clickMe');
        $('#contentButton li').not(this).removeClass('clickMe');
    });

    $('#content-left').click(function () {
        if (index < 1) {
            return;
        } else {
            index = index - 1;

            $(`#content`).animate({
                left: divWidth * index * -1,
            });

            //點到每一個都會變色(加上Class-clickMe)
            $('#contentButton li').slice(index, index + 1).addClass('clickMe');
            $('#contentButton li').not($('#contentButton li').slice(index, index + 1)).removeClass('clickMe');
        }
    })

    $('#content-right').click(function () {
        if ($('#contentButton li').length - 1 > index) {
            index = index + 1;


            $(`#content`).animate({
                left: divWidth * index * -1,
            });

            //點到每一個都會變色(加上Class-clickMe)
            $('#contentButton li').slice(index, index + 1).addClass('clickMe');
            $('#contentButton li').not($('#contentButton li').slice(index, index + 1)).removeClass('clickMe');

        } else {
            return;
        }

    })
});