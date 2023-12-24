import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();

const { port } = process.env;

app.listen(port, () => console.log(`server run port ${port}`));
