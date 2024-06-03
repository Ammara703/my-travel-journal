import PropTypes from "prop-types";
import "../index.css";
export default function Card(props) {
  return (
    <div>
      <div className="main_div">
        <img className="card_img" src={props.img} alt="location image" />
        <div className="upper_div">
          <div className="lower_div">
            <p className="card_location">
              <i className="fa-solid fa-location-dot icon_location"></i>
              &nbsp;
              {props.location}
            </p>
            <a href={props.googleMapsUrl} target="blank">
              view on maps
            </a>
          </div>

          <h1 className="card_h1">{props.title}</h1>
          <div className="date">
            <strong>
              <span className="startDate">{props.startDate} -</span>
              <span className="endDate"> {props.endDate}</span>
            </strong>
          </div>

          <p className="card_desc">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  googleMapsUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
