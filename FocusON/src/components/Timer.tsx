import { useEffect, useState } from "react";

type Timer = {
    minutes : number | string
    seconds : number | string
    hours : number | string
}
export const Timer = () => {
    const [timeString, setTimeString] = useState('00:00:00');
    const [timer, setTimer] = useState('2025-05-30T00:00:00');

    useEffect(() => {
        const countDownTime = new Date(timer);
      
        const interval =setInterval(() => {
             const time = new Date();
             let distance = countDownTime.getTime() - time.getTime();

             if (distance < 0) {
                 clearInterval(interval);
                 setTimeString('00:00:00');
             }

             let hours: Timer['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             let minutes : Timer['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
             let seconds : Timer['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

             hours = hours < 10 ? '0'+ hours : hours;
             minutes = minutes < 10 ? '0'+ minutes : minutes;
             seconds = seconds < 10 ? '0'+ seconds : seconds;

             setTimeString(hours + ':' + minutes + ':' + seconds)
             console.log(timeString);
        }, 1000);


        return () => {
            clearInterval(interval);
        }
    }, [timer])

  return (
    <div>
        <p>tuner</p>
        <h1>{timeString}</h1>
        
        <input
        type="datetime-local"
        onChange={(e) => setTimer(e.target.value)}
        value={timer}
        />

    </div>
  )
}
