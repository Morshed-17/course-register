import PropTypes from "prop-types";

const Selected = ({ selected }) => {
  console.log(selected);
  return (
    <li className="text-lg mb-2 text-primary-gray">{selected.course_name}</li>
  );
};

Selected.propTypes = {
  selected: PropTypes.object,
};

export default Selected;
