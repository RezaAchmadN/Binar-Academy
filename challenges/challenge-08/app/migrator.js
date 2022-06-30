const { exec } = require("child_process")
module.exports = async () => {
    return new Promise((resolve, reject) => {
        exec('npm run db:migrate', {env: process.env}, () => {
            exec('npm run db:seed', {env: process.env}, (err) => {
                resolve()
            })
        })
    })
}
