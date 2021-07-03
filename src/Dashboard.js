import useFetch from "./useFetch";
import  MapFoodItems from './listFoodItems';
import Curosal from "./Slider";

const categories = ["SeaFood","poultry","Pancakes"]

const Dashboard = () => {
  
  const { error, isPending, data: Food } = useFetch('http://localhost:3001/Food')
      //  console.log(Food[0].category)
  return(
    <div>
         <Curosal/>
         

             <div className="container text-center Banner">
      <div className="row">   
         <div className="col-lg-8">  
             <ul className="nav nav-tabs" id="myTab" role="tablist" >
                              {/* {categories.map ( category =>{
                                 return(
                                <li className="nav-item">
                                    <a className="nav-link active" id={category + 'tab'} data-toggle="tab" href={"#"+category }role="tab" aria-controls={category} aria-selected="true">{category}</a>
                                </li> )})} //how can i handle active and true
                               */}

                  <li className="nav-item">
                    <a className="nav-link active" id={categories[0] + 'tab'} data-toggle="tab" href={"#"+categories[0] } role="tab" aria-controls={categories[0]} aria-selected="true">{categories[0]}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id={categories[1] + '-tab'} data-toggle="tab" href={"#"+categories[1] } role="tab" aria-controls={categories[1]} aria-selected="false">{categories[1]}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id={categories[2] + '-tab'}data-toggle="tab" href={"#"+categories[2] } role="tab" aria-controls={categories[2]} aria-selected="false">{categories[2]}</a>
                  </li>
            </ul>
          
            <div className="tab-content" id="myTabContent">

              <div className="tab-pane active" id={categories[0]} role="tabpanel" aria-labelledby={categories[0] + '-tab'}>.....</div>
              <div className="tab-pane fade" id={categories[1]} role="tabpanel" aria-labelledby={categories[1] + '-tab'}>.....</div>
              <div className="tab-pane fade" id={categories[2]} role="tabpanel" aria-labelledby={categories[2] + '-tab'}>.....</div>
      
            </div>
      </div>


      <div className="col-lg-4"> 
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
      </div>


    </div>
   </div> 



      <div className="container Dashboard text-center">
  
             <div className="row">

             { isPending && <div>Loading...</div> }
              { error && <div>{ error }</div> }
              { Food &&  < MapFoodItems   Foods ={Food}  />}
              </div>
    
      </div>
      
      <div >
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</div>

     
  
    
    </div>
          
   )   
   }
  
 export default Dashboard;


 
 