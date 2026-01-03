import { Schema, model, models } from 'mongoose';

export interface IAchievement {
  studentName: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

const AchievementSchema = new Schema<IAchievement>({
  studentName: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  description: { type: String },
  imageUrl: { type: String }
});

export default models.Achievement || model<IAchievement>('Achievement', AchievementSchema);
