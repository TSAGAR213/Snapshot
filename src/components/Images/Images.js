import "./images.css"

function Images({imagesObj})
{   
    return <div id="image-container">
    {imagesObj.map((data,i)=>{
        return <div key={i} className="image-outside">
        <img className="image" src={`http://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`} alt="flickrImages"/>
        </div>
    })}
    </div>
}
export default Images;