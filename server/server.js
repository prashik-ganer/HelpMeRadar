const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-database-name.firebaseio.com'
});


const db = admin.firestore();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Disaster Management App API');
});

app.get('/api', (req, res) => {
    res.json({ message: 'API is working' });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
