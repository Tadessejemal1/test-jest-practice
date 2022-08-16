const capitalize = require('./Capitalize.js');

test("capitalize", () => {
    expect(capitalize("test")).toBe("Test");
})