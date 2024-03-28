module.exports = (on) => {

    on('task', {
        'db:teardown':()=>{
            const teardown = require('../../db/teardown.js')
            return teardown()
        },
        'db:seeding':()=>{
            const seeding = require('../../db/seeding.js')
            return seeding()
        }
    })
}