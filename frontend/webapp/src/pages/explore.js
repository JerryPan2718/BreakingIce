import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Explore = () => (
    <div>
        <h1 className="title is-1">This is the Explore Page</h1>
        <p>

            <MyApp />
            How to Play the Game?

        </p>
    </div>
);

function MyApp() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default Explore;
