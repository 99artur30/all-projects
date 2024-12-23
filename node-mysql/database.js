const {createPool} = require('mysql');
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Aomine2945",
    database: "myprojects"
});
pool.query('select * from userdata', (err, result, fields) => {
    if(err) {
        return console.log(err);
    }
    return console.log(result);
})