import React,{Component} from 'react';

class SlideShowImage extends Component{

  renderImages(img,i){
    return (
      <div key={i} className="carousel-item">
        <div className="img-con">
          <img className="d-block w-100" src={img} alt="First slide" />
        </div>
      </div>
    )
  }  

  renderList(item,i){
    return <li key={i} data-target="#slideshow" data-slide-to={i}></li>
  }

  render(){
    var images = this.props.images;
    var reduceImg = images.slice(1,images.length);
    return(
      <div id="slideshow" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#slideshow" data-slide-to="0" className="active"></li>
            {reduceImg.map((each,i) => this.renderList(each,i+1))}
            
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="img-con">
                <img className="d-block w-100" src={images[0]} alt="First slide" />
              </div>
            </div>
            {reduceImg.map((each,i) => this.renderImages(each,i))}
          </div>
          <a className="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#slideshow" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
      </div>
    )
  }
}

export default SlideShowImage;