// import React, { useEffect,useState } from 'react';
import {Link } from "react-router-dom";
// import {Button} from "react-bootstrap";

const Footer = () => {

return(
  
  <div className="Footer">

      <div className=" text-center">

          <div className="row">

                  <div className=" col-lg-4 col-sm-12 center sitemap">

                                        <h5>| Sitemap:</h5>

                                      
                                                         
                                                     <Link to = "/">Home</Link>
                                                     <Link to = "/Dashboard">Food</Link>
                                                     <Link to = "/Login">Login</Link>      
                                       
                                
                  </div>




                  <div className=" col-lg-4 col-sm-12 center feedbackForm">
                                            
                          <form> 
                                                                              
                                  <input type="email " placeholder="email" /> 
                                   
                                  <textarea  className=" form-control " placeholder="message" > </textarea>                                                
                                                                             
                                  <button className=" btn-block" >Send Feedback </button> 
                                                                                      
                                                                             
                          </form>
                                        
                  </div>


                                  <div className=" col-lg-4 col-sm-12 center contactus">

                                                  <h5>| Contact us:</h5>
                                         <div className="contactusInfo ">
                                         
                                            <i class="fas fa-phone">  04981214479001</i>  
                                            <i class="fas fa-map-marker-alt">  Alexandria,Egypt </i>
                                         </div>

                                         <div className="contactusIcons">
                                          <a href="https://">  <i class="fab fa-twitter"></i> </a>
                                          <a href="https://"> <i class="fab fa-instagram"></i></a>
                                          <a href="https://"> <i class="fab fa-linkedin-in"></i></a>
                                        </div>
                                   </div>
                                        

                             
           </div>
     </div>
             
             <div className="footerCopyRight text-center"> All Rights Reserved by <i className="fas fa-utensils"></i>   Food |Cort  </div>

 </div>
);

};

export default Footer;