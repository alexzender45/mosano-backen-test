// src/database/database.providers.ts
import mongoose from 'mongoose';
import { MONO_DB_CONNECTION_STRING } from '../constants';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://mosano:mosano@cluster0.iolu7pc.mongodb.net/test?retryWrites=true&w=majority'),
  },
];
