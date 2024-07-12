import { Tetfed } from "./Tetfed";
export function Masthead() {
  const imageUrl = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFfAMZMnRjXXMQ_rIEzOYpt-IdnIIBgtLcClfWxmAHTYfLE10W";
  return (
    <div className="image1">
      <img src={imageUrl} alt="placeholder" 
      style={{ width: '1706px', height: '700px' }} 
      />
      <div className="overlay-text">
      <h1  style={{paddingLeft:'70px',paddingRight:'70px'}}>
      Generate more leads with a                
      professional landing page!
      </h1>
      <Tetfed/>
      </div>
    </div>
  );
}



