//after we made a link for every comp to carry id ,and route to this page in app we're gonna fetch id from params url and then fetch data depends on id 

import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const Itemdetails = () =>{

    const {id} = useParams()
    console.log(id)
    const { error, isPending ,data: FoodItem} = useFetch('http://localhost:3001/Food/' + id);
    console.log(FoodItem)
    return (


      <div className="FoodItem-details">

          { isPending && <div>Loading...</div> }
          { error && <div>{ error }</div> }
          { FoodItem && (
          <div className="container"> 
              <div className="row">
                
              <div  className="  col-lg-4" style={{display:"inline"}} >
                  <div> <img src={FoodItem.poster}  alt={FoodItem.title} /></div>
                      <div className="itemDetailsContent ">
                          <h2>{ FoodItem.title }</h2>
                          <p> { FoodItem.ingredients }</p>
                      <div>{ FoodItem.recipe }</div>
                      </div>
                      </div>
                <div  className=" videoarea col-lg-8" >
                  <video   width="400" controls autoPlay muted>
                      <source src="mov_bbb.mp4" type="video/mp4"/>
                      <source src="mov_bbb.ogg" type="video/ogg"/>
                      Your browser does not support HTML video.
                  </video>
                  </div>
                
              </div>

            <i></i><h5> Tell us your opinion </h5>
            <hr/>
              <div>
                {/* starts  */}
              </div>

              <div>
              {/* profile pic+email */}
                 {/* comments   */}
              </div>
               

            <article>
              <h4>

              </h4>
            </article>
          </div>
          )}
     </div>
);


}
export default Itemdetails;



////////////////////////////////////////////////
// import {Media, Form, Button} from 'react-bootstrap';


// async function sendReview(userToken, backendURL,review){
//     let myHeaders = new Headers();
//     myHeaders.append("Authorization", `token ${userToken}`);
//     myHeaders.append("Content-Type", "application/json");
    
//     let requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: review,
//         redirect: 'follow'
//       };
//     let response = await fetch(`${backendURL}api/v2/userreview/`, requestOptions);
//     let resObj = await response.json();

//     return resObj;
// }
// async function deleteReview(userToken, backendURL,review){
//     let myHeaders = new Headers();
//     myHeaders.append("Authorization", `token ${userToken}`);
//     myHeaders.append("Content-Type", "application/json");
    
//     let requestOptions = {
//         method: 'DELETE',
//         headers: myHeaders,
//         body: review,
//         redirect: 'follow'
//       };
//     let response = await fetch(`${backendURL}api/v2/userreview/`, requestOptions);
//     let resObj = await response.json();

//     return resObj;
// }

// async function getReviews(userToken, backendURL,showID){
//     let myHeaders = new Headers();
//     myHeaders.append("Authorization", `token ${userToken}`);
//     myHeaders.append("Content-Type", "application/json");
//     let raw = JSON.stringify({
//     "showID": showID
//     });
//     let requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//       };
//     let response = await fetch(`${backendURL}api/v2/reviews/`, requestOptions);
//     let resObj = await response.json();
//     return resObj;
// }


// class UserReviews extends React.Component{

//         constructor(props){
//                 super(props)
//                 this.state={
//                     reviews:"",
//                     myrate: 0,
//                     myreview:"",
//                     reviewed:this.props.myreview
//                 }
//         }

//         submitReview = ()=>{
//             let myreview = JSON.stringify({
//                 "showID": this.props.backend.showID,
//                 "rating": this.state.myrate,
//                 "review": this.state.myreview
//                 });
//             sendReview(this.props.backend.userToken, this.props.backend.backendURL, myreview).then( data =>
//                 {
//                     getReviews(this.props.backend.userToken, this.props.backend.backendURL, this.props.backend.showID).then(
//                         rev => {
//                             this.setState({reviews: rev.reviews, myreview:"", myrate:0, reviewed:true})}
//                     )
//                 }
//                     ).catch(errMess => console.log(errMess))
//         }
//         deleteReview = ()=>{
//             let myreview = JSON.stringify({
//                 "showID": this.props.backend.showID,
   
//                 });
//             deleteReview(this.props.backend.userToken, this.props.backend.backendURL, myreview).then( data =>
//                 {
//                     getReviews(this.props.backend.userToken, this.props.backend.backendURL, this.props.backend.showID).then(
//                         rev => {
//                             this.setState({reviews: rev.reviews, myreview:"", myrate:0, reviewed:false})}
//                     )
//                 }
//                     ).catch(errMess => console.log(errMess))
//         }

//     render(){
//         return(
            
//             <div style={{backgroundColor:"#ffffff"}} className= "container bg-light rouned p-3 my-5">

//             <Form.Group >
//                 <Form.Control className="p-2 " size="lg" as="textarea" placeholder="write a review here...." value={this.state.myreview} onChange={(e)=>{this.setState({myreview:e.target.value})}} />
//                 <Form inline className="justify-content-end">
//                     <Form.Group>
//                         <Form.Control
//                                 as="select"
//                                 className="mr-sm-2"
//                                 id="inlineFormCustomSelect"
//                                 custom
//                                 value={this.state.myrate}
//                                 onChange={(e)=>this.setState({myrate:e.target.value})}
//                                 >
//                                 <option value="0" disabled>Rate...</option>
//                                 <option value="1">One</option>
//                                 <option value="2">Two</option>
//                                 <option value="3">Three</option>
//                                 <option value="4">Four</option>
//                                 <option value="5">Five</option>
//                         </Form.Control>
//                         <Button className="pull-right" onClick={this.submitReview}> {this.state.reviewed?"Edit your review":"Add a review"}</Button>
//                        { this.state.reviewed  &&
//                            <Button className="pull-right" variant="danger" onClick={this.deleteReview}>Delete your review</Button>
//                        }
//                    </Form.Group>
//                 </Form>
//             </Form.Group>
//             <ul  className="container-fluid  align-items-center my-5  ">
            
//             { this.state.reviews ?

//                      this.state.reviews.map( (review, index) =>
//                      <Media key={index}  as="li" className="bg-white p-2 m-3 rounded">
//                      <img className="mr-3"
//                      width={64}
//                      height={64}
//                      src={review.avatar}
//                      alt="User Profile"
//                      />
//                      <Media.Body>
//                      <h5>{review.user} <small>rate: {review.rating}</small></h5>
//                                          <p>{review.review}</p>
//                                          </Media.Body>
//                                      </Media>
//                                  )         
                    


//                 : this.props.reviews &&
                    
//                     this.props.reviews.map( (review, index) =>
//                     <Media key={review.user+index}  as="li" className="bg-white p-2 m-3 rounded">
//                     <img className="mr-3"
//                     width={64}
//                     height={64}
//                     src={review.avatar}
//                     alt="User Profile"
//                     />
//                     <Media.Body>
//                     <h5>{review.user} <small>rate: {review.rating}</small></h5>
//                                         <p>{review.review}</p>
//                                         </Media.Body>
//                                     </Media>
//                                 )              
                        
//             }
//                 </ul>     
//     </div>

//         );
//     }

// }


// export default UserReviews;