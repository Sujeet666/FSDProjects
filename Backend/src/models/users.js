const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, 'models/users.json'); 

async function fetchDataUsingFs(){
}
    async function getusers(req, res) {
    try{
        const data = await fetchDataUsingFs();
        constuserdata = JSON.parse(data).users;
        return res.json(userdata);
    }
    catch (error){
        return error.message;
    }
};
module.exports = {getusers};