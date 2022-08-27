import { connect } from 'mongoose';

export const StartConnection = async (): Promise<void> => {
  try {
    const db = await connect(
      'mongodb+srv://israel:Alumno$1@cluster0.cdjqzap.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log(db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
