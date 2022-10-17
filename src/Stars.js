import PropTypes from 'prop-types';
import Star from './Star';

function createItemList(count) {
  const result = [];

  for (let i = 0; i < count; i ++) {
    result.push(i);
  }

  return result;
} 

function Stars({ count }) {

  if (typeof(count) !== 'number' || count <= 0 || count > 5) {
    return null;
  }

  const ids = createItemList(count);

  return (
    <ul className="card-body-stars u-clearfix">
      { ids.map((id) => <Star key={id}/>) }
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number,
}

Stars.defaultProps = {
  count: 0,
}

export default Stars;
