import { env } from 'process';
import app from './app';
import { StartConnection } from './database';

StartConnection();
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server start on port ${PORT} 🔌`);
