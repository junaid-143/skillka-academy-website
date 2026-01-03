import { Schema, model, models } from 'mongoose';

export interface IRegistration {
  name: string;
  chessLevel: string;
  age: number;
  availableTime: string;
  batch: 'Offline Sunday' | 'Evening Batch' | 'Online' | string;
  isClubMember: boolean;
  createdAt?: Date;
}

const RegistrationSchema = new Schema<IRegistration>({
  name: { type: String, required: true, trim: true },
  chessLevel: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 3 },
  availableTime: { type: String, required: true, trim: true },
  batch: { type: String, required: true },
  isClubMember: { type: Boolean, required: true },
  createdAt: { type: Date, default: () => new Date() }
});

export default models.Registration || model<IRegistration>('Registration', RegistrationSchema);
