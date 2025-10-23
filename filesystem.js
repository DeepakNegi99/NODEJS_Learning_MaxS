import fs from 'fs';

fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err){
        console.log('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
})


fs.writeFile('example.txt', 'This is a test output.', (err) => {
    if(err){
        console.log('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
});