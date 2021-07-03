 import FoodTeam from "../imgs/FoodTeam.jpg";
const About = () =>{
 return(
    <div className="About">

        <div className="container text-center AboutContainer">
            <div className="row">

                <div className=" col-lg-6 col-sm-12 text-center ">

                                <h2>Who We are ?</h2>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. Aenean eget efficitur turpis.
                                    Maecenas laoreet mi sed ligula ultricies vestibulum. 
                                    Maecenas laoreet mi sed ligula ultricies vestibulum. 
                                    
                                </p>
                                                                
                </div>

                <div className=" col-lg-6 col-sm-12 aboutImage" > <img src={FoodTeam} alt="AboutPhoto"></img></div>
     
              
            </div>
        </div>
     </div> 
 );
}

export default About;
