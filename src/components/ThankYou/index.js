// @packages
import PropTypes from 'prop-types';

// @own
import './styles.scss';

const ThankYou = ({ image, raiting, title, description, handleGoBack }) => {
  return (
    <div className='thank-you'>
      <div className='thank-you__image'>
        <img src={image} alt='thank-you' />
      </div>
      <div className='thank-you__raiting'>You selected {raiting} of 5</div>
      <div className='thank-you__title'>{title}</div>
      <div className='thank-you__description'>{description}</div>
      <div className='thank-you__back' onClick={handleGoBack}>
        Back
      </div>
    </div>
  );
};

ThankYou.defaultProps = {
  title: 'Title',
  description: 'Description',
  handleGoBack: () => {},
};

ThankYou.propTypes = {
  description: PropTypes.string,
  handleGoBack: PropTypes.func,
  image: PropTypes.node,
  raiting: PropTypes.number,
  title: PropTypes.string,
};

export default ThankYou;
