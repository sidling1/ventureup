import React from 'react'

export default function EditProfile() {
  return (
    <>
        <div> My Profile </div>
        
        <div>
                <label for="bio">Bio</label>
                <input
                type="text" 
                placeholder="Enter bio"
                id="bio"
                name="bio"
              ></input>
        </div>
    
        <div>
                <label for="pic">Profile Picture</label>
                <input
                type="file" 
                placeholder="Upload Photo"
                id="pic"
                name="pic"
              ></input>
        </div>

        <button 
          type="submit" 
        >Save Changes</button>
    </>
  )
}
