const e = require('express');

var swaggerJSONFileName = './swagger.json';
var responsJSONFileName = './response.json';

fs = require('fs');
var swaggerJSON = require(swaggerJSONFileName);

/*
    Helper functions
*/

String.prototype.addNewLines = function (n) {
    return this + newLineCharacter.repeat(n);
};

String.prototype.addNewTabs = function (n) {
    return this + tabCharacter.repeat(n);
};

function convertPathFormatForExpress(path) {
    function replaceRange(s, start, end, substitute) {
        // from [0, start) + sub + [end ... ]
        return s.substring(0, start) + substitute + s.substring(end);
    }
    if (path.indexOf('{') != -1) {
        console.log(path.indexOf('{'));
        let leftIndex = path.indexOf('{');
        let rightIndex = path.indexOf('}');
        let param = path.substring(leftIndex + 1, rightIndex);
        path = `${replaceRange(path, leftIndex, rightIndex + 1, `:${param}`)}`;
    }
    return `"${path}"`;
}

function getPath() {
    return '"/someapi"';
}

/*
    create or update response.json
*/
let responseJSON = {};
let defaultResponse = { message: 'this is a default message' };
let defaultStatusCode = 400;

if (fs.existsSync('./response.json')) {
    responseJSON = require('./response.json');
}

// create default response
for (var path in swaggerJSON.paths) {
    if (!responseJSON[path]) {
        responseJSON[path] = {};
    }
    // add default response if response not exists for path
    for (var method in swaggerJSON.paths[path]) {
        if (
            !responseJSON[path][method] ||
            !responseJSON[path][method]['responses'] ||
            responseJSON[path][method]['defaultIndex'] == undefined ||
            !responseJSON[path][method]['responses'] instanceof Array
        ) {
            responseJSON[path][method] = {
                defaultIndex: 0,
                responses: [
                    {
                        response: defaultResponse,
                        statusCode: defaultStatusCode
                    }
                ]
            };
        }
    }
}
fs.writeFileSync(
    responsJSONFileName,
    JSON.stringify(responseJSON, null, 2),
    'utf-8'
);

/*
    Parameters
*/

let numberOfLinesSeperateEachSection = 3;
let outoutFileName = 'mockbackend.js';
let tabCharacter = '\t';
let newLineCharacter = '\n';
let newLineAndNewTab = `${newLineCharacter}${tabCharacter}`;
let port = 8000;
let urlPrefix = '""';
let fileContent = '';
let serverStartSuccessfullyMsg = `"listening at: ${port}"`;

/*
    creating import and constant variables 
*/

fileContent += `var express = require('express');${newLineCharacter}`;
fileContent += `var app = express();${newLineCharacter}`;
fileContent += `var port = ${port}${newLineCharacter}`;
fileContent += `var urlPrefix = ${urlPrefix};${newLineCharacter}`;
fileContent += `var swaggerJSON = require("${swaggerJSONFileName}")${newLineCharacter}`;
fileContent += `var paths = Object.keys(swaggerJSON.paths);${newLineCharacter}`;
fileContent += `var response = require("${responsJSONFileName}");${newLineCharacter}`;

/*
    create function to create response
*/
fileContent = fileContent.addNewLines(numberOfLinesSeperateEachSection);
fileContent += `//Read response from JSON and create default respose: 400 ${newLineCharacter}`;

/*
    Creat API based on JSON
*/

var paths = swaggerJSON.paths;
fileContent = fileContent.addNewLines(numberOfLinesSeperateEachSection);
fileContent += `//Creating mock apis ${newLineCharacter}${newLineCharacter}`;

for (var path in paths) {
    var route = paths[path];
    var updatedRoute = convertPathFormatForExpress(path);
    for (var method in route) {
        fileContent += `app.${method}(${updatedRoute}, function (req, res) {${newLineAndNewTab}let path = "${path}";${newLineAndNewTab}let method = "${method}"${newLineAndNewTab}let responseIndex = response[path][method]["defaultIndex"]${newLineAndNewTab}res.statusCode = response[path][method]["responses"][responseIndex]["statusCode"]${newLineAndNewTab}res.send(response[path][method]["responses"][responseIndex]["response"]);${newLineCharacter}});`;
        fileContent = fileContent.addNewLines(2);
    }
}

/*
    Create endpoint to update response
*/

//TODO:

/*
    Create endpoint for GUI
*/

//TODO:

/*
    Creating  server
*/
fileContent = fileContent.addNewLines(numberOfLinesSeperateEachSection);

fileContent += `var server = app.listen(port, function () {${newLineAndNewTab}console.log(${serverStartSuccessfullyMsg})${newLineCharacter}});`;

/*
    Create the backend file
*/
fs.writeFile(outoutFileName, fileContent, function (err) {
    if (err) return console.log(err);
    console.log(`${outoutFileName} created.`);
});
