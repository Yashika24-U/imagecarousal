import ImageSlider from "./ImageSlider";

function App() {
  const slides = [
    {url:"http://localhost:3000//image-1.jpg",title:"Beach"},
    {url:"http://localhost:3000/image-2.jpg",title:"Boat"},
    {url:"http://localhost:3000/image-3.jpg",title:"Forest"},
    {url:"http://localhost:3000/image-4.jpg",title:"City"},
    {url:"http://localhost:3000/image-5.jpg",title:"Italy"},
  ];

  const containerStyles = {
    width :"500px",
    height : "280px",
    margin :"0 auto",

  }
  
  return (
    <>
    <div style = {containerStyles}>
    <ImageSlider slider = {slides} key = {slides.url}/>

    </div>
      
    
     </>
    
  )
}

export default App;
