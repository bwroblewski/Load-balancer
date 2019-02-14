const body = require('body-parser');
const express = require('express');
const LoadBalancer = require('./LoadBalancer').LoadBalancer;
const app = express();

const port1 = 3000;

app.use(body.json());

const handler = () => (req: any, res: any) => {
    res.send(`Ok`);
};

// Only handle GET and POST requests
app.get('*', handler()).post('*', handler());

app.listen(port1, (err: any) => {
    if (err) {
        console.log(err);
    } else {
        // console.log(`http://localhost:${port1}/world`);
    }
});

let loadBalancer = LoadBalancer.getInstance();
loadBalancer.setStrategy('DNSDelegation');
loadBalancer.addDatabase({ port: '1000', userName: 'asd', password: 'ad', databaseName: 'db' });
loadBalancer.addDatabase({ port: '1001', userName: 'asd1', password: 'asd1', databaseName: 'db1' });
loadBalancer.addDatabase({ port: '1002', userName: 'asd2', password: 'asd2', databaseName: 'db2' });
loadBalancer.addDatabase({ port: '1003', userName: 'asd3', password: 'asd3', databaseName: 'db3' });

loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("SELECT * from table", (res: any) => {
    console.log(res)
});
loadBalancer.sendQuery("DELETE wszystko nieznam sql xD from table");
