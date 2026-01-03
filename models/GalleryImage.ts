import { Schema, model, models } from 'mongoose';

export interface IGalleryImage {
  title: string;
  url: string;
  event?: string;
  date?: Date;
}

const GalleryImageSchema = new Schema<IGalleryImage>({
  title: { type: String, required: true, trim: true },
  url: { type: String, required: true },
  event: { type: String },
  date: { type: Date }
});

export default models.GalleryImage || model<IGalleryImage>('GalleryImage', GalleryImageSchema);
