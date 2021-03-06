const fs = require('fs')


const newDate = () => new Date().toString()

const generateNewId = (array) => {
   
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

function searchingById(array, id) {
    return new Promise((resolve, reject) => {
  
        const row = array.find(r => r.id == id)
    
        if (!row) {
            reject({
                message: 'No element related to the id ' + id,
                status: 404
            })
        }
        resolve(row)
    })
}

function writeJSONFile(filename, content) {
    const jsonString = JSON.stringify(content)
    
    fs.writeFileSync(filename, jsonString, 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}module.exports = {
    newDate,
    generateNewId,
    searchingById,
    writeJSONFile
}