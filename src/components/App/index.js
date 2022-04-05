// @packages
import { useState } from 'react';

// @own
import InteractiveRaiting from 'components/InteractiveRaiting';
import ThankYou from 'components/ThankYou';
import starIcon from 'assets/icon-star.svg';
import thankYouImage from 'assets/illustration-thank-you.svg';
import Footer from 'components/Footer';

const App = () => {
  const [selectedRaiting, setSelectedRaiting] = useState(undefined);
  const [submitted, setSubmitted] = useState(false);
  const RAITING_OPTIONS = [1, 2, 3, 4, 5];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedRaiting !== undefined) {
      setSubmitted(true);
    }
  };

  const handleGoBack = () => {
    setSubmitted(false);
    setSelectedRaiting(undefined);
  };

  return (
    <div className='app'>
      {!submitted ? (
        <InteractiveRaiting
          description='Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
          handleSetRaiting={setSelectedRaiting}
          handleSubmit={handleSubmit}
          icon={starIcon}
          raitings={RAITING_OPTIONS}
          selectedRaiting={selectedRaiting}
          title='How did we do?'
        />
      ) : (
        <ThankYou
          description="We appreciate you taking the time to give a raiting. If you ever need more support, don't hesitate to get in touch!"
          handleGoBack={handleGoBack}
          image={thankYouImage}
          raiting={selectedRaiting}
          title='Thank you!'
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
