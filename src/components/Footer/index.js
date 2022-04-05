// @own
import './styles.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <section>
        <span>Challenge by </span>
        <a
          className='footer__link'
          href='https://www.frontendmentor.io?ref=challenge'
          rel='noreferrer'
          target='_blank'
        >
          FrontendMentor
        </a>
      </section>
      <section>
        <span>Coded by </span>
        <a
          className='footer__link'
          href='https://github.com/lacosta'
          target='_blank'
          rel='noreferrer'
        >
          Leandro Acosta.
        </a>
      </section>
    </footer>
  );
};

export default Footer;
