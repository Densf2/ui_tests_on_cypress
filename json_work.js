// const values = require('./values.json')
// const fs = require('fs-extra')
// const { writeFile, readFile } = require('fs-extra');

// const path = './values.json'

// readFile(path, (error, data) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     const parsedData = JSON.parse(data);
//     parsedData.createdAt = new Date().toISOString();
//     writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
//       if (err) {
//         console.log('Failed to write updated data to file');
//         return;
//       }
//       console.log('Updated file successfully');
//     });
//   });
  

// function Func() {
//     fetch("./values.json")
//         .then((res) => {
//         return res.json();
//     })
//     .then((data) => console.log(data));
// }
// Func()

// console.log(readData)

// let jsonObj1 = '{"name":"den","lname":"pavliuk","age":100500}'

// let obj2 = JSON.parse(jsonObj1)

// console.log(obj2.name)

// obj2.city = "York"

// console.log(obj2)

// jsonObj1 = JSON.stringify(obj2)

// console.log(values)


// let path = "./values6.json";
// let data, jsonData;
// try {
//     if(fs.existsSync(path)) {
//         data = fs.readFileSync(path, 'utf8');
//         if(data) {
//             jsonData = JSON.parse(data);
//             if(typeof jsonData === 'object' && jsonData !== null && !Array.isArray(jsonData)) {
//                 jsonData.test = 'test';
//                 jsonData.email = 'test@gmail.com';
//                 fs.writeFileSync(path, JSON.stringify(jsonData));
//             } else {
//                 throw new Error("Parsed JSON data is not an object");
//             }
//         } else {
//             throw new Error("No data read from the file");
//         }
//     } else {
//         throw new Error("File does not exist");
//     }
// } catch (err) {
//     console.error(err.message);
// }

// let ddd = JSON.parse(fs.readFileSync(path, 'utf-8'))
// console.log(ddd)

// ddd.newVAl = 'Myval'

// fs.writeFileSync(path, JSON.stringify(ddd))
const fs = require('fs-extra');
// const path = './values.json';

// async function func1() {
//     let ddd = await JSON.parse(fs.readFileSync(path, 'utf-8'))
//     console.log(ddd)
//     console.log('Hello from async function')
//     ddd.dkd = 'DKD'
//     await fs.writeFile(path, JSON.stringify(ddd))
// }

// func1()

let arrN = []
async function readJsonAndWriteName(path='./response_1694287579730.json') {
    let jsonData2 = await fs.readJson(path)

    for (let element of jsonData2.data) {
        arrN.push(element['first_name'])
    }
    console.log(arrN)
    await fs.writeJson('names.json', JSON.stringify(arrN))
}

readJsonAndWriteName()
