import colors from 'colors';
colors.enable();
import mongoose from 'mongoose';

export const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`DATABASE CONNECTION SUCCESSFULL`.cyan);
  } catch (error) {
    console.error(`DATABASE ERROR:${error}`);
  }
};
