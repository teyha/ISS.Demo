/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/Gruntfile.js to edit this template
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
    });
};

app.listen(3000,() => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({}, (err,data) => {
        if(err){
            response.end();
            return
        }
        response.json(data);   
})
});

    app.post('/api', (request, response) => {
    const data = request.bosy;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
    
});