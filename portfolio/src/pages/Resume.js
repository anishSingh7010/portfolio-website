import resumePath from '../assets/anishLatestResume.pdf';

const Resume = () => {
  return (
    <iframe
      style={{ width: '100%', height: '100vh' }}
      src={resumePath}
      className="m-auto"
      title="resume"
    />
  );
};

export default Resume;
