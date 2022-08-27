import { connect } from 'mongoose';

export const StartConnection = async (): Promise<void> => {
  try {
    const db = await connect('mongodb://localhost/mevn-database');
    console.log(db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
