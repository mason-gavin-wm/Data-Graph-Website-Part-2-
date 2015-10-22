/**
 * Created by session1 on 10/20/15.
 */
$(document).ready(function(){
    $('#iPhone').click(function(){
        $('#iPhone').attr('src', 'https://c1.staticflickr.com/5/4127/5094020069_00e3616315_b.jpg');
    });

    $('#button1').click(function(){
        var button = function(answer){
            $('#text1').html(answer)
        };
        button(prompt("Enter Text"));
    });

    $('#Samsung').click(function(){
        $('#Samsung').attr('src', 'http://cdn.images.dailystar.co.uk/dynamic/23/photos/822000/620x/203822.jpg');
    });

    $('#button2').click(function(){
        var button = function(answer){
            $('#text2').html(answer)
        };
        button(prompt("Enter Text"));
    });

    $('#Windows').click(function(){
        $('#Windows').attr('src', 'http://forums.windowscentral.com/attachments/htc-8x/31564d1364891035t-8xcracked.jpg');
    });

    $('#button3').click(function(){
        var button = function(answer){
            $('#text3').html(answer)
        };
        button(prompt("Enter Text"));
    });

    $('#HappyI').click(function(){
        $('#HappyI').attr('src', 'http://techsplurge.com/wp-content/uploads/2012/03/Google-Drive_13EA3/sad-iphone.jpg');
    });

    $('#button4').click(function(){
        var button = function(answer){
            $('#text4').html(answer)
        };
        button(prompt("Enter Text"));
    });

    $('#HappyS').click(function(){
        $('#HappyS').attr('src', 'http://www.geek.com/wp-content/uploads/2011/11/sad-galaxy-tab1-590x656.png');
    });

    $('#button5').click(function(){
        var button = function(answer){
            $('#text5').html(answer)
        };
        button(prompt("Enter Text"));
    });

    $('#HappyW').click(function(){
        $('#HappyW').attr('src', 'http://2.bp.blogspot.com/-03G2lP5sT0U/UNilXsKVGpI/AAAAAAAAACU/NZ8UTCYlONk/s1600/M1240069.JPG');
    });

    $('#button6').click(function(){
        var button = function(answer){
            $('#text6').html(answer)
        };
        button(prompt("Enter Text"));
    });

    $('#KidI').click(function(){
        $('#KidI').attr('src', 'https://c2.staticflickr.com/4/3419/3884774963_08506943b6.jpg');
    });

    $('#button7').click(function(){
        var button = function(answer){
            $('#text7').html(answer)
        };
        button(prompt("Enter Text"));
    });

    $('#KidS').click(function(){
        $('#KidS').attr('src', 'http://celebrity-lists.com/wp-content/uploads/2012/03/brad-pitt.jpg');
    });

    $('#button8').click(function(){
        var button = function(answer){
            $('#text8').html(answer)
        };
        button(prompt("Enter Text"));
    });

    $('#KidW').click(function(){
        $('#KidW').attr('src', 'https://c2.staticflickr.com/4/3038/3040508093_50104084b2.jpg');
    });

    $('#button9').click(function(){
        var button = function(answer){
            $('#text9').html(answer)
        };
        button(prompt("Enter Text"));
    });
});




