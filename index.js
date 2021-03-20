$(() => {
    let currentPropElem = "background-color";

    hexFromRGB = (r, g, b) => {
        const hex = [
            r.toString(16),
            g.toString(16),
            b.toString(16)
        ];
        $.each(hex, function (nr, val) {
            if (val.length === 1) {
                hex[nr] = `0${val}`;
            };
        });
        return hex.join("").toUpperCase();
    };

    function refreshSwatch() {
        const red = $("#red").slider("value"),
            green = $("#green").slider("value"),
            blue = $("#blue").slider("value"),
            hex = hexFromRGB(red, green, blue);
        $("#swatch").css(currentPropElem, "#" + hex);
        activeBtn();
    };

    function activeBtn() {
        const [...btns] = $("button");
        btns.forEach(btn => {
            if (btn.id === currentPropElem) {
                $(`#${btn.id}`).addClass("btnActive");
            } else {
                $(`#${btn.id}`).removeClass("btnActive");
            };
        });
    };

    $('#color').on('click', () => {
        currentPropElem = 'color';
        refreshSwatch();
    });

    $('#background-color').on('click', () => {
        currentPropElem = 'background-color';
        refreshSwatch();
    });

    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $("#red").slider("value", 255);
    $("#green").slider("value", 140);
    $("#blue").slider("value", 60);
});