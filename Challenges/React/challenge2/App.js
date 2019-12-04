import React from 'react';
import Joke from './components/Joke';

function App() {
  return (
    <div>
      <Joke
        delivery="If Bill Gates had a dime for every time Windows crashed ... Oh, he does."
      />
      <Joke
        setup="What do you get if you lock a monkey in a room with a typewriter for 8 hours?"
        delivery="A regular expression."
      />
      <Joke
        setup="What do you call a developer who doesn't comment code?"
        delivery="A developer."
      />
      <Joke
        delivery="A web developer walks into a restaurant.
        He immediately leaves in disgust as the restaurant was laid out in tables."
      />
      <Joke
        delivery="Have a great weekend!
        I hope your code behaves the same on Monday as it did on Friday."
      />
    </div>
  );
}

export default App;
