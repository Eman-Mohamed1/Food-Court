// import { useEffect } from "react";
// import WOW from 'wowjs';
// import ReactWOW from 'react-wow';


const Featuresdata=[
{
iconClassName : "fas fa-users",
 h3  :"Features",
 p   :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
},

{
  iconClassName : "fas fa-users",
   h3  :"Features",
   p   :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },

{
  iconClassName : "fas fa-users",
  h3   :"Features",
   p   :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  {
    iconClassName : "fas fa-users",
    h3  :"Features",
     p   :"Lorem ipsum dolor sit amet,consectetur adipiscing elit."
    },
]



let styles = {
  iconStyle:{fontSize: "60px",
           color: "forestgreen"},
  headStyle:{color:"#00c308"},
  textStyle:{color: "forestgreen"}
   }


const Features =() =>{
// Defining WOW 
// componentDidMount() {
//   new WOW.WOW({
   
// }).init();
// }
  
// useEffect(() => {
        
//           new WOW.WOW().init(); 
          
//      },[])
    return (
      //Wow js animation in HTML
      <div className="container text-center Features">
      
      <div className="row">
       
      {Featuresdata.map(feature=>{

       return(
      //  <ReactWOW animation='fadeIn'>
        <div key={feature.h3} className=" col-lg-3 col-md-6 col-sm-12 "style={{borderRadius:"50%"}}>
       
                 {/* <div className=" WOW bounceInDown center" data-wow-delay="0.5s" > */}
                <i className={feature.iconClassName} style={styles.iconStyle}></i>
                <h4 style={styles.headStyle}> {feature.h3}  </h4>
                <p  style={styles.textStyle}> {feature.p}</p>
                {/* </div> */}
               
        </div>
        // </ReactWOW>
       ) 
       })}
     
    </div>
    </div>
   
    );
    
 
  }
  
export default Features;

