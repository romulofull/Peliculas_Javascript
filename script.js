document.addEventListener('DOMContentLoaded', () => {
    const movieItems = document.querySelectorAll('.movie-list li');  
    const featuredImage = document.querySelector('.featured-movie .cover');  
    const featuredTitle = document.querySelector('.bottom-bar .title-container'); 

 
    const updateFeaturedMovie = (imageSrc, title) => {
        featuredImage.src = imageSrc;  
        featuredImage.alt = title;  
        
        const playIcon = document.createElement('span');
        playIcon.classList.add('fa', 'fa-play-circle');  
        
        
        featuredTitle.innerHTML = '';  
        
    
        featuredTitle.appendChild(playIcon); 
        featuredTitle.appendChild(document.createTextNode(title));  
    };
  
    movieItems.forEach(item => {
        item.addEventListener('click', () => {
            const movieImage = item.querySelector('img').src;  
            const movieTitle = item.querySelector('.title').textContent; 
            updateFeaturedMovie(movieImage, movieTitle); 
        });
    });
});
