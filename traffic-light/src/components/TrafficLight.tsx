import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../store';
import { changeLight, selectTrafficLight } from "../features/trafficLightSlice";


const TrafficLight: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const trafficLight = useSelector(selectTrafficLight);

  useEffect(() => {
    const intervals = [
      { light: 'red', duration: 4000 },
      { light: 'orange', duration: 5000 },
      { light: 'green', duration: 3000 },
    ];

    let currentIndex = 0;
    const switchLight = () => {
      const current = intervals[currentIndex];

      dispatch(changeLight(current.light as any));
      currentIndex = (currentIndex + 1) % intervals.length;
    };

    switchLight();
    const intervalId = setInterval(switchLight, intervals[currentIndex].duration);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div>
      <h1>{trafficLight.message}</h1>
      <div>
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            opacity: trafficLight.currentLight === 'red' ? 1 : 0.3,
          }}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'orange',
            opacity: trafficLight.currentLight === 'orange' ? 1 : 0.3,
          }}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'green',
            opacity: trafficLight.currentLight === 'green' ? 1 : 0.3,
          }}
        />
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'yellow',
            opacity: trafficLight.currentLight === 'yellow' ? 1 : 0.3,
          }}
        />
      </div>
    </div>
    );
}

export default TrafficLight;