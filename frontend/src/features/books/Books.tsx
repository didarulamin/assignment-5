/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { useGetAllBooksQuery } from "./bookSlice"

/* type Review= {
  username: string;
  rating: number;
  comment: string;
}

type IBook ={
  Title: string;
  Author: string;
  Genre: string;
  PublicationDate: string;
  Reviews: Review[];
} */

/* interface BookCardProps {
  book: IBook;
} */type IReview= {
  username: string;
  rating: number;
  comment: string;
}


type IBook ={
  Title: string;
  Author: string;
  Genre: string;
  PublicationDate: string;
  Reviews: IReview[];
} 

interface BProps {
  book: IBook;
}
interface RProps {
  review: IReview;
}
const BookCard = ( {book}:BProps ) => {
    const { Title, Author, Genre, PublicationDate, Reviews } = book;
  
    return (
        <div className="col">
                <div className="card h-100">
        <h2>{Title}</h2>
        <p>Author: {Author}</p>
        <p>Genre: {Genre}</p>
        <p>Publication Date: {PublicationDate}</p>
        <h3>Reviews</h3>
       {/*  {Reviews?.map((review:IReview) => (
          <div key={review.username} className="review">
            <p>Username: {review.username}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))} */}
      <div className="flex justify-content-center">
      <button type="button" className="btn btn-primary w-50 ">update</button>
      <button type="button" className="btn btn-danger w-50">delete</button>
      </div>
      </div>
        </div>
  
    );
  };
  

function Books () {
  // Assuming `books` is an array of IBook type
  const { data, error, isLoading } = useGetAllBooksQuery(undefined)
  console.log(data)
 
  return (
     <div className="row row-cols-1 row-cols-md-3 g-4">
      {data?.map((book: IBook) => (
        <BookCard key={book.Title} book={book} />
      ))}
    </div> 



  );
};

export default Books





