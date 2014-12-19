var simulador = function (f1, a2) {
    if (f1 > a2) {
        return 'First';
    } else {
        return 'Second';
    }
};

var simulador2 = function () {
    var chars, char1, char2, totalDamage, i = 0;

    char1 = [Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5)];
    char1[3] = char1[2] * 5;

    char2 = [Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5), Math.ceil(Math.random() * 5)];
    char2[3] = char2[2] * 5;

    chars = [char1, char2];

    while (chars[0][3] > 0 && chars[1][3] > 0) {
        totalDamage = (char1[0] * Math.ceil(Math.random() * 6)) - (char2[0] * Math.ceil(Math.random() * 6));

        if (totalDamage > 0) {
            if (i % 2 === 0) {
                chars[1][3] = chars[1][3] - totalDamage;
            } else {
                chars[0][3] = chars[0][3] - totalDamage;
            }
        }

        i += 1;
    }

    if (chars[1][3] <= 0) {
        chars[0][4] = 'Winner';
    } else {
        chars[1][4] = 'Winner';
    }

    return chars;
};
