import mongoose from "mongoose";

interface Review {
  username: string;
  rating: number;
  comment: string;
}

interface IBook {
  Title: string;
  Author: string;
  Genre: string;
  PublicationDate: Date;
  Reviews: Review[];
}

const reviewSchema = new mongoose.Schema<Review>({
  username: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const bookSchema = new mongoose.Schema<IBook>({
  Title: { type: String, required: true },
  Author: { type: String, required: true },
  Genre: { type: String, required: true },
  PublicationDate: { type: Date, required: true },
  Reviews: [reviewSchema],
});

const BooksModel = mongoose.model("books", bookSchema);

export default BooksModel;
