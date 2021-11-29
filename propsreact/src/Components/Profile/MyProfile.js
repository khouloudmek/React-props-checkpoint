import React from 'react'

function MyProfile(props) {
    const {fullName,bio,profession,children}= props
    console.log(typeof bio)
    
    return (
        <div>
            
            {children}
            <h1 className="mText">Name : {fullName}</h1>
            <h2 className="mText">Profession : {profession} </h2>
            <h3 className="mText"> Bio : {bio}</h3>
            
        </div>
    )
}

export default MyProfile
