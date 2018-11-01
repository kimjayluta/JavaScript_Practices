
// To get the time
setInterval(time, 100);

function time(){
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let oras = sec % 12;
    let am = false;
    let clock = $('.clock');
    let line = $('.line');

    // Pag ang hr == 0 means 12 am
    // Pag ang hr == 12 means 12 pm
    if(hr < 1){
        hr = hr + 12;
    } else if(hr > 12){
        hr = hr - 12;
    }
    // AM or PM
    // AM start sa 0 to 11s
    // Pm start sa 12 to 23;
    if(hr >= 0 && hr < 12){
        $('#dayOrNight').text('AM');
    } else if(hr >= 12 && hr <= 23){
        $('#dayOrNight').text('PM');
    }

    if(hr < 10){
        hr = '0' + hr;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }

    $('#hr').text(hr);
    $('#min').text(':' + min);
    $('#sec').text(':' + sec);

    switch(oras){
        case 1:
            $(clock).addClass('bgClockOne');
            $(line).addClass('lineOne');
            break;
        case 2:
            $(clock).removeClass('bgClockOne').addClass('bgClockTwo');
            $(line).removeClass('lineOne').addClass('lineTwo');
            break;
        case 3:
            $(clock).removeClass('bgClockTwo').addClass('bgClockThree');
            $(line).removeClass('lineTwo').addClass('lineThree');
            break;
        case 4:
            $(clock).removeClass('bgClockThree').addClass('bgClockFour');
            $(line).removeClass('lineThree').addClass('lineFour');
            break;
        case 5:
            $(clock).removeClass('bgClockFour').addClass('bgClockFive');
            $(line).removeClass('lineFour').addClass('lineFive');
            break;
        case 6:
            $(clock).removeClass('bgClockFive').addClass('bgClockSix');
            $(line).removeClass('lineFive').addClass('lineSix');
            break;
        case 7:
            $(clock).removeClass('bgClockSix').addClass('bgClockSeven');
            $(line).removeClass('lineSix').addClass('lineSeven');
            break;
        case 8:
            $(clock).removeClass('bgClockSeven').addClass('bgClockEight');
            $(line).removeClass('lineSeven').addClass('lineEight');
            break;
        case 9:
            $(clock).removeClass('bgClockEight').addClass('bgClockNine');
            $(line).removeClass('lineEight').addClass('lineNine');
            break;
        case 10:
            $(clock).removeClass('bgClockNine').addClass('bgClockTen');
            $(line).removeClass('lineNine').addClass('lineTen');
            break;
        case 11:
            $(clock).removeClass('bgClockTen').addClass('bgClockEleven');
            $(line).removeClass('lineTen').addClass('lineEleven');
            break;
        default:
            $(clock).removeClass('bgClockEleven');
            $(line).removeClass('lineEleven');
            break;
    }
}
