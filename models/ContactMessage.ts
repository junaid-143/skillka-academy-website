import { Schema, model, models } from 'mongoose';

export interface IContactMessage {
  name: string;
  email?: string;
  phone: string;
  message: string;
  createdAt?: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>({
  name: { type: String, required: true, trim: true },
  email: { type: String },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date() }
});

export default models.ContactMessage || model<IContactMessage>('ContactMessage', ContactMessageSchema);
