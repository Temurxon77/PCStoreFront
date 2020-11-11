import React from "react";

import photo from './1.jpeg';
import photo1 from '../Images/6010356488.jpg';
import photo2 from '../Images/123.jpg';
const MainCarouselPage = () => {
  return (
 
    <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel" style={{}}>
   
      <ol className="carousel-indicators">
        <li data-target="#video-carousel-example" data-slide-to="0"></li>
        <li data-target="#video-carousel-example" data-slide-to="1"></li>
        <li data-target="#video-carousel-example" data-slide-to="2"></li>
      </ol>
    
      <div className="carousel-inner" role="listbox" style={{height: '500px'}}>
        <div className="carousel-item active">
          
        <img className="card-img-top" src={photo}/>
         
        </div>
        <div className="carousel-item">
        <img className="card-img-top" src={photo1}/>
        </div>
        <div className="carousel-item">
        <img className="card-img-top" src={photo2}/>
        </div>
      </div>
      <div className="carousel-inner">

<div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">


  <div className="controls-top">
    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
  </div>

  <ol className="carousel-indicators">
    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
    <li data-target="#multi-item-example" data-slide-to="2"></li>
    <li data-target="#multi-item-example" data-slide-to="3"></li>

    
  </ol>

  <div className="carousel-inner "  role="listbox">

    <div className="carousel-item active">

      <div className="row">
        <div className="col-md-3">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
              alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-md-3 clearfix d-none d-md-block">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
              alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-md-3 clearfix d-none d-md-block">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
              alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-md-3 clearfix d-none d-md-block">
          <div className="card mb-2">
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
        <div className="col-md-3">
          <div className="card mb-2">
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

        <div className="col-md-3 clearfix d-none d-md-block">
          <div className="card mb-2">
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
        <div className="col-md-3 clearfix d-none d-md-block">
          <div className="card mb-2">
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

        <div className="col-md-3 clearfix d-none d-md-block">
          <div className="card mb-2">
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
        <div className="col-md-3">
          <div className="card mb-2">
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
        

        <div className="col-md-3 clearfix d-none d-md-block">
          <div className="card mb-2">
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
        <div className="col-md-3 clearfix d-none d-md-block">
          <div className="card mb-2">
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

        <div className="col-md-3 clearfix d-none d-md-block">
          <div className="card mb-2">
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

      <a className="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
  
    </div>
  
  );
}

export default MainCarouselPage;