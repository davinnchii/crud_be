const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();

const port = 3000;

app.use(cors());

app.get('/', (_, res) => {
	res.send('Hello world!');
});

app.use(express.static(path.resolve('public'), {
	index: false,
	redirect: false,
	immutable: true,
	maxAge: '7d',
}));

app.listen(port, () => {
	// eslint-disable-next-line no-console
	return console.log(`Express is listening at http://localhost:${port}`);
});