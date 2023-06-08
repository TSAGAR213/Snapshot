import "./main.css"
import { Api } from "../Api"
import { useState } from "react"
import Images from "../Images/Images";
function Main({noun,change})
{   let [shower,setShower]=useState(false);
    let [headshower,setHeadshower]=useState('')
    let [imagesObj,setImagesObj]=useState([]);


    return <div id="main">
    <h1 className="headerfont">SnapShot</h1>

    <input
     type="text"
     id="search-bar" 
     placeholder="   Search..."
     value={noun}
     onChange={(e)=>{
        change(e.target.value)
        setShower(false)
     }}
     
     />
    <button
    onClick={()=>{
        if(noun!=='')
        {
            Api(noun)
            .then(data=>{
                setImagesObj(data["photos"].photo)
            })
            .catch(e=>{
               alert({status:"error",message:e.message})
            })
            setHeadshower(noun)
            change('')
            setShower(true)
        }
       
    }}
    >search</button>
    <br/>
    <div id="select-contain">
    <div 
    className="clicksearch"
    onClick={()=>{
        change('')
        setHeadshower('Mountain')
            Api('Mountain')
            .then(data=>{
                setImagesObj(data["photos"].photo)
            })
            .catch(e=>{
               alert({status:"error",message:e.message})
            })
            setShower(true)
        
    }}
    >Mountain</div>
    <div
     className="clicksearch"
     onClick={()=>{
        change('')
        setHeadshower('Beaches')
            Api('Beaches')
            .then(data=>{
                setImagesObj(data["photos"].photo)
            })
            .catch(e=>{
               alert({status:"error",message:e.message})
            })
            setShower(true)
    }}
     >Beaches</div>
    <div
     className="clicksearch"
     onClick={()=>{
        change('')
        setHeadshower('Birds')
            Api('Birds')
            .then(data=>{
                setImagesObj(data["photos"].photo)
            })
            .catch(e=>{
               alert({status:"error",message:e.message})
            })
            setShower(true)
    }}
     >Birds</div>
    <div 
    className="clicksearch"
    onClick={()=>{
        change('')
        setHeadshower('Food')
            Api('Food')
            .then(data=>{
                setImagesObj(data["photos"].photo)
            })
            .catch(e=>{
               alert({status:"error",message:e.message})
            })
            setShower(true)
    }}
    >Food</div>
    </div>
{shower && <h2 id="showhead">{headshower} Pictures</h2>}   


<Images imagesObj={imagesObj}/>


    </div>
}
export default Main;