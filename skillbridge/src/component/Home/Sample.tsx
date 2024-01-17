import { Link } from "react-router-dom";
import {zapier, spotify, netflix, notion, adobe, amazon, zoom} from "../../assets/resource/iconResource"
import './Sample.scss';

function Sample() {

  return (
    <section className="container card_section mt-5">
    <div
      className="card_container bg-white rounded p-3">
      <div className="img_container border">
        <Link to="#">
          <img src={zapier} alt="zapier" className="card-img"/>
        </Link>
        
      </div>
      <div className="img_container border">
        <Link to="#">
          <img src={spotify} alt="spotify" className="card-img" />
        </Link>
      </div>
      <div className="img_container border">
        <Link to="#">
          <img src={zoom} alt="zoom" className="card-img" />
        </Link>
      </div>
      <div className="img_container border">
        <Link to="#">
          <img src={amazon} alt="amazon" className="card-img"/>
        </Link>
      </div>
      <div className="img_container border">
        <Link to="#" >
          <img src={adobe} alt="adobe" className="card-img"/>
        </Link>
      </div>
      <div className="img_container border">
        <Link to="#">
          <img src={notion} alt="notion" className="card-img" />
        </Link>
      </div>
      <div className="img_container border">
        <Link to="#">
          <img src={netflix} alt="netflix" className="card-img" />
        </Link>
      </div>
    </div>
  </section>
  );
}

export default Sample;