const strings = [ 'a', 'b', 'c', 'd', 'e' ];

class Player {
    constructor(pronoum, type) {
        this.pronoum = pronoum;
        this.type = type;
    }

    introduce () {
        console.log(`Hello my name is ${ this.name }, I am a ${ this.type }`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play () {
        console.log(`Weeeee im ${ this.type }`);
    }
}

const wizardOne = new Wizard("Emily", "Turtle");
console.log(wizardOne);
