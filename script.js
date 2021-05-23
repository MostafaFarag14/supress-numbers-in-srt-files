const replace = require('replace-in-file')


const filesPath = process.argv[2]

const options = {
    files: `${filesPath}/*.srt`,
    from: /(?<=.)(\r\n)[0-9]+(\r)/g,
    to: "",
}

const result = replace.sync(options)
console.log(result);
