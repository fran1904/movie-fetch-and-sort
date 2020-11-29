import '../home.css'
import movieArray from '../data.js'
import MovieCard from './MovieCard'
import React, { Component } from 'react';

class Home extends Component {
    state = { 
        movieArray: movieArray  // The imported data is re-named here
     }

    handleSortAZ = () => {
         let sortedDataAZ = this.state.movieArray.sort(
            function (a, b){
                if (a.title < b.title){
                return -1
                }
                if (a.title > b.title){
                    return 1
                }
                return 0
            }
         )
        this.setState({movieArray: sortedDataAZ})
    }

    handleSortZA = () => {
        let sortedDataAZ = this.state.movieArray.sort(
           function (a, b){
               if (a.title < b.title){
               return -1
               }
               if (a.title > b.title){
                   return 1
               }
               return 0
           }
        )
        let sortedDataZA = sortedDataAZ.reverse()
       this.setState({movieArray: sortedDataZA})
   }
   handleBestRated = () => {
    let sortedBestRated = this.state.movieArray.sort(
       function (a, b){
           if (a.rate < b.rate){
           return 1
           }
           if (a.rate > b.rate){
               return -1
           }
           return 0
       }
    )
   this.setState({movieArray: sortedBestRated})
}
   handleDateAscending = () => {
    let sortedDateAscending = this.state.movieArray.sort(
       function (a, b){
           if (a.year < b.year){
           return -1
           }
           if (a.year > b.year){
               return 1
           }
           return 0
       }
    )
   this.setState({movieArray: sortedDateAscending})
}
handleDateDescending = () => {
    let sortedDateAscending = this.state.movieArray.sort(
       function (a, b){
           if (a.year < b.year){
           return 1
           }
           if (a.year > b.year){
               return -1
           }
           return 0
       }
    )
   this.setState({movieArray: sortedDateAscending})
}



    render() { 
        return ( 
            <section>
                <button onClick={this.handleSortAZ}>Sort A-Z</button>
                <button onClick={this.handleSortZA}>Sort Z-A</button>
                <button onClick={this.handleDateAscending}>Date Ascending</button>
                <button onClick={this.handleDateDescending}>Date Descending</button>
                <button onClick={this.handleBestRated}>Sort Best Rated</button>
                <div className="grid-container">
                    {this.state.movieArray.map((movieArrItem, index) => 
                    <MovieCard movieArrItem={movieArrItem} key={movieArrItem.index} />
                )}
                </div>
            </section>
         );
    }
}
 
export default Home;