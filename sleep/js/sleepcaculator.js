
function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

function sleepCaculator(h, m, cycle, timetosleep) {

    $("#result").text("");
    $("#renderSuggest").text("");

    var timeCycle = 1.5 * cycle * 60;
    var getup = h * 60 + timeCycle + m + timetosleep;
    if (getup > 24 * 60) {
        getup = h * 60 + timeCycle + m + timetosleep - 24 * 60;
    }

    var badgeType = "success";
    switch (cycle) {
        case 3:
            badgeType = "danger";
            break;
        case 4:
            badgeType = "warning";
            break;
        case 5:
            badgeType = "primary";
            break;
        case 6:
            badgeType = "success";
            break;
    }

    var s = `<p>Bạn nên thức dậy lúc </p>  <span class="badge badge-` + badgeType + `" style=" font-size: 25px; ">` + pad(Math.floor(getup / 60), 2) + ":" + pad(getup % 60, 2) + `</span>`;

    $("#result").html(s);


    var c = 3;
    var renderSuggest = "";
    for (var i = 0; i < 6; i++) {
        var cyc = 1.5 * c * 60;
        var getuplst = h * 60 + cyc + m + timetosleep;
        if (getuplst > 24 * 60) {
            getuplst = h * 60 + cyc + m + timetosleep - 24 * 60;
        }

        renderSuggest += `<tr> <th scope="row">` + (i + 1) + `</th> <td>` + pad(h, 2) + `:` + pad(m, 2) + `</td> <td>` + pad(Math.floor(getuplst / 60), 2) + ":" + pad(getuplst % 60, 2) + `</td> <td>` + c * 1.5 + `</td> <td>` + c + `</td> </tr>`;
        c++;
    }

    $("#renderSuggest").html(renderSuggest);

}

function process() {
    var h = Number($("#hour").val());
    var m = Number($("#minutes").val());
    var cycle = Number($("#timeCycle").val());
    var timetosleep = Number($("#timeToSleep").val());
    var mess = "";

    if (h > 23) {
        mess = 'Giờ thì chỉ có max là 23 thôi';
    }
    if (h < 0) {
        mess = 'Giờ thì chỉ có làm gì có âm';
    }
    if (m > 59 || timetosleep > 59) {
        mess = 'Phút thì chỉ có max là 59 thôi';
    }
    if (m < 0 || timetosleep < 0) {
        mess = 'Phút thì chỉ có làm gì có âm';
    }
    if (mess !== "") {
        var s = `<div class="alert alert-danger" role="alert"> ` + mess + ` </div>`
        $("#result").html(s);
        return;
    }
    sleepCaculator(h, m, cycle, timetosleep);

}



function updateTime() {
    var today = new Date();
    $("#hour").val(pad(today.getHours(), 2));
    $("#minutes").val(pad(today.getMinutes(), 2));
    process();
}


function clockUpdate() {
    var date = new Date();

    var h = pad(date.getHours(), 2);
    var m = pad(date.getMinutes(), 2);
    var s = pad(date.getSeconds(), 2);

    $('.digital-clock').text(h + ':' + m + ':' + s);

    if (Number(s) === 0) {
        updateTime();
    }
}
function init() {
    updateTime()
    $("#btnProcess").click(function () {
        process();
    });

    $("#hour, #minutes, #timeCycle, #timeToSleep").change(function () {
        process();
    });
    clockUpdate();
    setInterval(clockUpdate, 1000);

}
//////

init();




