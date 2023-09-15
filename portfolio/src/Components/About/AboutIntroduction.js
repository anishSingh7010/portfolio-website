import ContactInformation from '../Contact/ContactInformation';

const AboutIntroduction = () => {
  return (
    <div className="about-introduction md:max-w-lg p-5">
      <h1 className="font-semibold text-6xl mb-5">About Me</h1>
      <div className="introuction-text-wrapper mb-5">
        <p>
          Hi! I am Anish, a full stack website developer. I have 4+ years of
          <a href="#education-experience"> website development experience</a>. I
          love building & testing new features and then bringing them to life
          using my front-end skills. I got my Master's Degree from University of
          Guelph in 2021 and have been working with Publicis Sapient since
          graduating.
        </p>
        &nbsp;
        <p>
          I try to workout 4-5 days a week, some days it's hard to stay
          consistent but I am trying to make it a habit than rely on motivation.
          Also, these days I am playing Street Fighter 6 a lot and trying to get
          to diamond rank. I would love to stream one day. One day :)
        </p>
      </div>
      <ContactInformation />
    </div>
  );
};

export default AboutIntroduction;
