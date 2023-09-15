import './Timeline.css';
import { BsCalendar } from 'react-icons/bs';

const Timeline = ({ position, institute, duration }) => {
  return (
    <div className="timeline flex flex-col px-6 relative">
      <span className="position">{position}</span>
      <span className="institution">{institute}</span>
      <span className="duration">
        <BsCalendar /> {duration}
      </span>
    </div>
  );
};

export default Timeline;
