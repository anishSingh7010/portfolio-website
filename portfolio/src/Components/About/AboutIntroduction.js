import ContactInformation from '../Contact/ContactInformation';
import './AboutIntroduction.css';

const AboutIntroduction = () => {
  return (
    <div className="about-introduction md:max-w-lg p-5 md:w-6/12">
      <h1 className="font-semibold text-6xl mb-5">About Me</h1>
      <div className="introuction-text-wrapper mb-5 text-lg">
        <p>
          Hi! I am <span className="name font-bold">Anish</span>, a full stack
          website developer. I have 4+ years of{' '}
          <a className="experience font-bold" href="#education-experience">
            website development experience
          </a>
          . I love building & testing new features and then bringing them to
          life using my front-end skills. I got my Master's Degree from
          University of Guelph in 2021 and have been working with Publicis
          Sapient since graduating.
        </p>
        &nbsp;
        <p>
          I try to workout 4-5 days a week, some days it's hard to stay
          consistent but I am trying to make it a habit than rely on motivation.
          I play a little bit of Street Fighter 6 and I main Cammy!
        </p>
      </div>
      <ContactInformation />
    </div>
  );
};

export default AboutIntroduction;
