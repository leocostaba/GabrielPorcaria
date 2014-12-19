var simulador = function (f1, a2) {
    if (f1 > a2) {
        return 'First';
    } else {
        return 'Second';
    }
};

var generateChar = function (name) {
    var countChar, limite = 10, strength, armor, resistence;

    countChar = limite;

    strength = Math.ceil(Math.random() * 5);
    armor = Math.ceil(Math.random() * 5);
    countChar = countChar - (strength + armor);
    resistence = Math.max(countChar, 0) <= 5 ?            Math.max(countChar, 0) : 5;

    var char = {
        name: name,
        strength: strength,
        armor: armor,
        resistence: resistence,
        life: 0,
        status: ''
    };

    char.life = (char.resistence * 5) === 0 ? 1 : (char.resistence * 5);

    return char;
};

var simulador2 = function (name1, name2) {
    var chars, totalDamage, i = 0, char1, char2;

    char1 = generateChar(name1);
    char2 = generateChar(name2);

    chars = [char1, char2];

    while (chars[0].life > 0 && chars[1].life > 0) {

        if (i % 2 === 0) {
            totalDamage = (char1.strength * Math.ceil(Math.random() * 6)) - (char2.armor * Math.ceil(Math.random() * 6));
            if (totalDamage > 0) {
                chars[1].life = chars[1].life - totalDamage;
            }
        } else {
            totalDamage = (char2.strength * Math.ceil(Math.random() * 6)) - (char1.armor * Math.ceil(Math.random() * 6));
            if (totalDamage > 0) {
                chars[0].life = chars[0].life - totalDamage;
            }
        }

        i += 1;
    }

    if (chars[1].life <= 0) {
        chars[0].status = 'Winner';
    } else {
        chars[1].status = 'Winner';
    }

    return chars[0].status === 'Winner' ? chars[0] : chars[1];
};


