import availabilityCounseling from '@/app/lib/service/endpoint/user/availability-counseling';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useSwipeable } from 'react-swipeable';

const BookingAppointment = ({ onTimeSelect }) => {
  const [dates, setDates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSession, setSelectedSession] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const daysPerPage = 7;

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const data = await availabilityCounseling();
        const dateArray = data.availability.map((item) => {
          const sessions = Object.keys(item.session).map((session, index) => {
            const sessionId = parseInt(session.replace('session ', ''));    
            return {
              id: sessionId,
              time: `${8 + index}:00`,
              status: item.session[session],
            };
          });

          const originalDate = new Date(item.counseling_date).toISOString().split('T')[0];
          const displayDay = new Date(item.counseling_date).toLocaleDateString('id-ID', {
            weekday: 'short',
          });
          const displayDate = new Date(item.counseling_date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
          });

          return {
            originalDate,  
            displayDay,    
            displayDate,   
            sessions,
          };
        });

        setDates(dateArray);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching availability:', error);
      }
    };

    fetchAvailability();
  }, []);

  const handleNext = () => {
    if (currentIndex < dates.length - daysPerPage) {
      setCurrentIndex(currentIndex + daysPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - daysPerPage);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const handleTimeSelect = ({ date, time, session_id }) => {
    setSelectedSession({ date, session_id });
    onTimeSelect({ date, time, session_id });
  };

  return (
    <div className="w-full mx-auto z-0 flex items-start" {...handlers}>
      <button
        className="bg-transparent rounded-full text-3xl text-gray-600 hover:text-gray-700 transition-all"
        onClick={handlePrev}
        aria-label="Prev"
        style={{ width: '40px' }}
        disabled={currentIndex === 0}
      >
        <IoIosArrowBack />
      </button>

      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-7 gap-4">
          {loading ? (
            Array.from({ length: daysPerPage }).map((_, index) => (
              <div key={index} className="rounded-lg shadow-sm text-center">
                <div className="h-6 bg-gray-200 animate-pulse rounded w-2/3 mx-auto"></div>
                <div className="h-4 bg-gray-200 animate-pulse mt-2 rounded w-1/3 mx-auto"></div>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {Array.from({ length: 7 }).map((_, idx) => (
                    <div key={idx} className="h-8 bg-gray-200 animate-pulse rounded"></div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            dates.slice(currentIndex, currentIndex + daysPerPage).map((day, index) => (
              <div key={index} className="rounded-lg shadow-sm text-center">
                <div className="text-lg font-semibold text-textPrimary">
                  {day.displayDay} 
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {day.displayDate} 
                </div>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {day.sessions.map((session, idx) => (
                    <button
                      key={idx}
                      className={`py-2 px-4 rounded-xl text-sm font-medium border text-center ${session.status
                        ? selectedSession?.date === day.originalDate && selectedSession?.session_id === session.id
                          ? 'bg-primary text-white border-primary hover:bg-purple-700'
                          : 'bg-white border-primary text-primary font-semibold'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      disabled={!session.status}
                      onClick={() => handleTimeSelect({ date: day.originalDate, time: session.time, session_id: session.id })}
                    >
                      {session.time}
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <button
        className="bg-transparent rotate-180 rounded-full text-3xl text-gray-600 hover:text-gray-700 transition-all"
        onClick={handleNext}
        aria-label="Next"
        style={{ width: '40px' }}
        disabled={currentIndex >= dates.length - daysPerPage}
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
};

export default BookingAppointment;
