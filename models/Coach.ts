import { Schema, model, models } from 'mongoose';

export interface ICoach {
  name: string;
  fideRating?: number;
  bio?: string;
}

const CoachSchema = new Schema<ICoach>(
  {
    name: { type: String, required: true, trim: true },
    fideRating: { type: Number },
    bio: { type: String }
  },
  { timestamps: true }
);

export default models.Coach || model<ICoach>('Coach', CoachSchema);
