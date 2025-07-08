import React from 'react'

const Profile = () => {

  const [profile, setProfile] = React.useState(
    {
    name: "",
    age: ""
  }
  )
   const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <label> Name:
          <input type='text' name='name' value={profile.name} onChange={handleChange}/>
        </label> 
      </div>
      <div>
        <label>Age: 
          <input type="number" name='age' value={profile.age} onChange={handleChange}/>
        </label>
      </div>
      <h2>Pofile Info</h2>
      <h4>Name: {profile.name}</h4>
      <p>Age: {profile.age}</p>
    </div>
  )
}

export default Profile