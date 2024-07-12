import { Bottetfed } from "./Bottetfed";
export function Upbot(){
    const imagerl = "https://services.meteored.com/img/article/partez-a-la-decouverte-du-point-le-plus-isole-du-monde-a-la-conquete-du-point-nemo-1707324259588_1024.jpeg"
    return(
        <div className="image10">
      <img src={imagerl} alt="placeholder" 
      style={{ width: '1706px', height: '400px' }} 
      />
      <div className="over-text">
      <h2 style={{marginTop:"400px"}}>Ready to get started? Sign up now!</h2>
       <Bottetfed/>
      </div>
    </div>
    );
}
