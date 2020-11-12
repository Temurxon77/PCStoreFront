import React from "react";
import './minicarousel.css'
import photo from '../Images/12.png';
import photo1 from '../Images/540.png';

const CarouselPage = () => {
  return (
   <div style={{backgroundColor: 'black', marginTop: '-25px'}}>
    
    <div className="container my-4" style={{backgroundColor: 'black',  marginTop: '100%'}}>

    <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel" >

    
      <div className="controls-top">
        <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
        <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
      </div>
    
      <ol className="carousel-indicators">
        <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
        <li data-target="#multi-item-example" data-slide-to="1"></li>
        <li data-target="#multi-item-example" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active">

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2" style={{backgroundColor: '#111111', height: '100%'}}>
              <img className="card-img-top" src={photo}/>
                <div className="card-body">
                  <h4 className="card-title" style={{color: 'white'}}>Компоненты ПК</h4>
                 
                  
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2" style={{backgroundColor: '#111111', height: '100%'}}>
              <img className="card-img-top" src={photo1}/>
                <div className="card-body">
                  <h4 className="card-title" style={{color: 'white'}}>Мониторы</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2" style={{backgroundColor: '#111111', height: '100%'}}>
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      
        <div className="carousel-item">

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2" style={{backgroundColor: '#111111', height: '100%'}}>
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2" style={{backgroundColor: '#111111', height: '100%'}}>
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2" style={{backgroundColor: '#111111', height: '100%'}}>
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
          </div>

        </div>
     

        <div className="carousel-item">

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-2" style={{backgroundColor: '#111111', height: '100%'}}>
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2" style={{backgroundColor: '#111111', height: '100%'}}>
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 clearfix d-none d-md-block">
              <div className="card mb-2" style={{backgroundColor: '#111111', height: '100%'}}>
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                  alt="Card image cap"/>
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a className="btn btn-primary">Button</a>
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