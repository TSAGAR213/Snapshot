function Api(noun)
{
    return fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=04a3fb53f14a830868d5c72f9bf088e4&tags=${noun}&format=json&nojsoncallback=1`)
          .then(data=>{
            return (data.json())
          })
          .catch(e=>{
            return(e)
          }) 
}
export {Api}