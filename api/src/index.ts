import express from 'express';

const app = express();
const port = 3000;

app.get( "/", ( req, res ) => {
    res.send( {"test": true});
} );

app.post( "/", ( req, res ) => {
    res.send( {"test": true});
});

app.put( "/", ( req, res ) => {
    res.send( {"test": true});
});

app.delete( "/", ( req, res ) => {
    res.send( {"test": true});
});


app.listen(port, () => {
    console.log(`Hello world! Running on port: ${port}.`);
});