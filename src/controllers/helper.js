const bcrypt = require('bcryptjs');

const helper = {};

helper.encryptPassword = async (contrase) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(contrase, salt);
    return hash;
};

helper.macthPassword = async (contrase, saveContrase) => {
    try {
        return await bcrypt.compare(contrase, saveContrase);
    } catch (e) {
        console.log(e)
    }
};
module.exports = helper;