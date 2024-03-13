import PropTypes from "prop-types";

const Card = ({data}) => {
  return (
    <>
      {/* {props?.data?.map((u, i) => ( */}
        <div  className="cards">
          <div className="card">
            <h3>{data.name}</h3>
            <p>{data.email}</p>
          </div>
        </div>
      {/* ))} */}
    </>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
