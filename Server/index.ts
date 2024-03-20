import dotenv from 'dotenv';
dotenv.config();
import app from './src/app';

const { port } = process.env;

app.listen(port, () => console.log(`server run port ${port}`));
