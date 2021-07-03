import { Link } from "react-router-dom";

const MapFoodItems = ({Foods}) =>{

return(
<div className="row">
    {Foods.map(Food => (

       
                <div key={Food.id} className=" col-lg-4 col-md-6 col-sm-12 overflow-hidden " style={{display:"inline",marginTop:"15px"}}>
                           
                           
                                <Link to={`/Dashboard/${Food.id}`}>  
                                    <img  src={Food.poster} alt={Food.title}/>
                                    <div >
                                        <h2  className=""> {Food.title}</h2>
                                        <p className="">{Food.ingredients}</p>
                                    </div>
                                </Link>
                           
                </div>
                )
    )}
</div>
);

}

export default MapFoodItems;








