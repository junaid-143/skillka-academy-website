import { Schema, model, models } from 'mongoose';

export interface IEvent {
  title: string;
  description?: string;
  date?: Date;
  imageUrl?: string;
}

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true, trim: true },
  description: { type: String },
  date: { type: Date },
  imageUrl: { type: String }
});

export default models.Event || model<IEvent>('Event', EventSchema);
