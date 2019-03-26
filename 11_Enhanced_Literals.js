//Enhanced Literals

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };
const COLORS1 = { red, blue };

// Return width and height as a json

const canvasDimensions = function (width, initialHeight) {
    const height = initialHeight * 9 / 16;
    return {
        width,
        height
    };
}

// Without Enhanced Literals

const color = 'red';

const Car = {
    color: color,
    drive: function () {
        return 'Sound!';
    },
    getColor: function () {
        return this.color;
    }
};

// With Enhanced Literals

const color1 = 'red';

const Car1 = {
    color,
    drive() {
        return 'Sound!';
    },
    getColor() {
        return this.color;
    }
};
