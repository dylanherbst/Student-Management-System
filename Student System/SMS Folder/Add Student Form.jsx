import React, { useState } from 'react';


function AddStudentForm({ onAddStudent }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [avatar, setAvataar] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddStudent({name, location, avatar})
        setName('');
        setLocation('');
        setAvatar('');
    }

return (
<form onSubmit={handleSubmit}>
<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='name' />


            <div>
                <input 
                    type="radio" 
                    id="australia" 
                    name="location" 
                    value="AU" 
                    checked={location === 'AU'} 
                    onChange={e => setLocation(e.target.value)}
                />
                <label htmlFor="australia">Australia</label>
            </div>

            <div>
                <input 
                    type="radio" 
                    id="newZealand" 
                    name="location" 
                    value="NZ" 
                    checked={location === 'NZ'} 
                    onChange={e => setLocation(e.target.value)}
                />
                <label htmlFor="newZealand">New Zealand</label>
            </div>

            <button type="submit">Add Student</button>

</form>
)


}

export default AddStudentForm