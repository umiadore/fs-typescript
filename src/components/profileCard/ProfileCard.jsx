
function ProfileCard ({avatar, fullname, domain, hobby}) {
    return (
        <div className="wrapper">
                <div className = "grid-container">
                    <div>
                       <img src={avatar} alt="profilePicture" />
                       <p><strong>Name: </strong>{fullname} </p>
                       <p><strong>Domain: </strong>{domain}</p>
                       <p><strong> Hobby: </strong>{hobby}</p>
                    </div></div></div>
    )
}

export default ProfileCard