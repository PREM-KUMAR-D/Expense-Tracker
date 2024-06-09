const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const expenseRoute = require('./routes/expense');
const sequelize = require('./util/database');
const Expense = require('./model/expense');






const app = express();


app.use(cors());

app.use(bodyParser.json());

app.use('/expense',expenseRoute);

sequelize.sync({force:true});

app.listen(4000);
