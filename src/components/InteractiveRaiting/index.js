// @packages
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

const InteractiveRaiting = ({
  className,
  description,
  handleSetRaiting,
  handleSubmit,
  icon,
  raitings,
  selectedRaiting,
  title,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='interactive-raiting'>
        <div className='interactive-raiting__icon'>
          <img src={icon} alt='star icon' />
        </div>
        <div className='interactive-raiting__title'>{title}</div>
        <div className='interactive-raiting__description'>{description}</div>
        <div className='interactive-raiting__raitings'>
          {raitings.map((raiting) => (
            <div
              className={cn('interactive-raiting__raiting', className, {
                'interactive-raiting__raiting--selected':
                  selectedRaiting === raiting,
              })}
              key={raiting}
              onClick={() => handleSetRaiting(raiting)}
            >
              {raiting}
            </div>
          ))}
        </div>
        <button type='submit' className='interactive-raiting__button'>
          Submit
        </button>
      </div>
    </form>
  );
};

InteractiveRaiting.defaultProps = {
  description: 'Description',
  handleSetRaiting: () => {},
  handleSubmit: () => {},
  raitings: [],
  title: 'Title',
};

InteractiveRaiting.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  handleSetRaiting: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  icon: PropTypes.node,
  raitings: PropTypes.array.isRequired,
  selectedRaiting: PropTypes.number,
  title: PropTypes.string,
};

export default InteractiveRaiting;
