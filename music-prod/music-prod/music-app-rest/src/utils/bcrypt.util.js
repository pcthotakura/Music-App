const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

    exports.encryptpassword=async function(password)
    {
        return await bcrypt.hash(password, salt);
    }

    exports.compare_password=async function(password,dbpassword)
    {
        return await bcrypt.compare(password, dbpassword)
    }


