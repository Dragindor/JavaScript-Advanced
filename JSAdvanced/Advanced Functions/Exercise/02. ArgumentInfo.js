function argInfo()
{
    const params = Array.from(arguments);
    const types = {};

    for (const arg of params) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
    }

    console.log(Object.entries(types).sort((a, b) => b[1] - a[1]));
}

argInfo('cat', 42, function () { console.log('Hello world!'); });