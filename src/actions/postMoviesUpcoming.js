export const postMoviesUpcoming = url => {
   // const call = await fetch(url);
   // const data = await call.json();
   // return data;

   fetch(url)
      .then(res => res.json())
      // .then(data =>
      //    this.setState({
      //       movies: data.results
      //    })
      // )
      .then(data => {
         return data;
      })
      .catch(error => console.log(error));
};

export default postMoviesUpcoming;
