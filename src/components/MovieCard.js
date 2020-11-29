const MovieCard = (props) => {
    return (

        <div className="grid-item">
            <h2>{props.movieArrItem.title}</h2>
            <p>Year: {props.movieArrItem.year}</p>
            <p>Director: {props.movieArrItem.director}</p>
            <p>Length: {props.movieArrItem.duration}</p>
            <p>Rating: {props.movieArrItem.rate}</p>
            <p>Genres:</p>
            {props.movieArrItem.genre.map((genreArrItem, index) => 
                <p>{genreArrItem}</p>
            )}
        </div>
     );
}
 
export default MovieCard;