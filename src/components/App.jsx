import Feedback from "./Feedback/Feedback";

const state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
<<<<<<< Updated upstream
      <Feedback/>
=======
      <Feedback state={ state } />
      
>>>>>>> Stashed changes
    </div>
  );
};
