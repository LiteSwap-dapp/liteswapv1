import React from "react";

const Home = ()=> {
    return(
        <main>
        <div className="main-wrapper">
        <div class="card">
        <div class="card-body">
            <h1>Lets get to Farm</h1>
         <div className="cardWrapper">
             <div className="imgWrapper">
                 <img src="../swap-portfolio.svg"/>
             </div>
             <div className="textWrapper">
             <div class="card-body">
          This is some text within a card body.
          
        </div>
        <button type="button" class="btn btn-primary">Farm</button>
        
             </div>
     
         </div>
   
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          This is some text within a card body.
        </div>
      </div>
      </div>
      </main>
    );
}

export default Home;