import React from "react";
import photo from '../Images/case.png';
import photo1 from '../Images/monitor.png';
import photo2 from '../Images/nabor.png';
import photo3 from '../Images/naushniki.png';
import photo4 from '../Images/12.png';
import photo5 from '../Images/chair.png';
import photo6 from '../Images/laptop.png';
import photo7 from '../Images/kolonka.png';
import './minicarousel.css';

const CarouselPage = () => {
  return (
   <div style={{backgroundColor: 'black', marginTop: '-23px'}}>
    <div className="container my-4">
    <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel" >   

      <a className="carousel-control-prev" href="#multi-item-example" role="button" data-slide="prev" style={{width: '50px'}}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#multi-item-example" role="button" data-slide="next" style={{width: '50px'}}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active col-lg-12">
          <div className="row">
            <div className="col-md-3" >
              <div className="colorcard">
              <img className="imgg" src={photo}/>
                <div className="card-body">
                  <h4 className="card-title-text">Кейсы</h4>         
                </div>
              </div>
            </div>

            <div className="col-md-3 clearfix d-none d-md-block">
              <div className="colorcard" >
              <img className="imgg" src={photo1}  />
                <div className="card-body">
                  <h4 className="card-title-text">Мониторы</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3 clearfix d-none d-md-block">
              <div className="colorcard">
              <img className="imgg" src={photo2}  />
                <div className="card-body">
                  <h4 className="card-title-text">Игровые наборы</h4>                
                </div>
              </div>
            </div>

             <div className="col-md-3 clearfix d-none d-md-block">
              <div className="colorcard">
              <img className="imgg" src={photo3}  />
                <div className="card-body">
                  <h4 className="card-title-text">Наушники</h4>              
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-3">
              <div className="colorcard">
              <img className="imgg" src={photo4}  />
                <div className="card-body">
                  <h4 className="card-title-text">Комплектующие</h4>              
                </div>
              </div>
            </div>

            <div className="col-md-3 clearfix d-none d-md-block">
              <div className="colorcard">
              <img className="imgg" src={photo5}  />
                <div className="card-body">
                  <h4 className="card-title-text">Игровые кресла</h4>          
                </div>
              </div>
            </div>

            <div className="col-md-3 clearfix d-none d-md-block">
              <div className="colorcard">
              <img className="imgg" src={photo6}  />
                <div className="card-body">
                  <h4 className="card-title-text">Ноутбуки</h4>              
                </div>
              </div>
            </div>

            <div className="col-md-3 clearfix d-none d-md-block">
              <div className="colorcard">
              <img className="imgg" src={photo7}  />
                <div className="card-body">
                  <h4 className="card-title-text">Колонки</h4>  
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
     

    </div>
    </div>
  
    </div>
  );
}

export default CarouselPage;