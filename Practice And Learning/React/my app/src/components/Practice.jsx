import PropTypes from "prop-types";

const Practice = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((val, index) => (
          <li key={index}>
            {val.id} is {val.name}
          </li>
        ))}
      </ul>
      <div>{props.name}</div>
    </div>
  );
};

Practice.propTypes = {
  name: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ),
};

export default Practice;
