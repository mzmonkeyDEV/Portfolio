const fs = require('fs/promises');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

// Run the steps only when a browser sends a request.
const server = http.createServer((req, res) => {
    main().then((data) => {
        res.write(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
        res.end();
    }).catch((error) => {
        console.log(error);
        res.end('Cannot read or write the JSON file. Check the terminal.');
    });
});

// Read JSON text and turn it into JavaScript data.
const readJsonFile = async () => {
    const text = await fs.readFile('cloth1.json', 'utf8');
    return JSON.parse(text);
};

// Add the matching stock number to each clothing item.
const editJsonFile = (data) => {
    const n_stock = [12, 13, 50, 22, 55, 87, 12, 29, 10];
    for (let i = 0; i < data.length; i++) {
        data[i].stock = n_stock[i];
    }
    return data;
};

// Turn JavaScript data into JSON text and save it.
const writeJsonFile = async (data) => {
    await fs.writeFile('new_cloth.json', JSON.stringify(data, null, 2));
};

// Keep the steps in order: read, edit, then write.
const main = async () => {
    const data = await readJsonFile();
    editJsonFile(data);
    await writeJsonFile(data);
    return data;
};

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
