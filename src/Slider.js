 //npm install react-animated-slider --save
 import Slider from 'react-animated-slider';
 import 'react-animated-slider/build/horizontal.css';
 import image1 from "../src/imgs/image1.jpg";
 import image2 from "../src/imgs/image2.webp";
 import image3 from "../src/imgs/image3.jpg";
//  import 'normalize.css/normalize.css';

 const content = [
   {
     title: 'Vulputate Mollis Ultricies Fermentum Parturient',
     description:
     'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
     image: image1,
     user: 'Luan Gjokaj',
     userProfile: 'https://i.imgur.com/JSW6mEk.png'
   },
   {
     title: 'Tortor Dapibus Commodo Aenean Quam',
     description:
     'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
     image: image2,
     user: 'Erich Behrens',
     userProfile: 'https://i.imgur.com/0Clfnu7.png'
   },
   {
     title: 'Phasellus volutpat metus',
     description:
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
     image: image3,
     user: 'Bruno Vizovskyy',
     userProfile: 'https://i.imgur.com/4KeKvtH.png'
   }
 ];
 
 const Curosal = () =>{
   return(
   <div>
     
     <Slider className="slider-wrapper"  autoplay={3000}>
       {content.map((item, index) => (
         <div
           key={index}
           className="slider-content"
           style={{ background: `url('${item.image}') no-repeat center center ` }} >
           <div className="inner">
             <h1>{item.title}</h1>
             <p>{item.description}</p>
             <button>{item.button}</button>
           </div>
           <section>
             <img src={item.userProfile} alt={item.user} />
             <span>
               Posted by <strong>{item.user}</strong>
             </span>
           </section>
         </div>
       ))}
     </Slider>
   </div>
 );
 
 



};
export default Curosal ;




