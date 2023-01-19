//https://api.github.com/users/username
import { useState } from 'react';

const GetGithubUser = () =>{
    let [display, setDisplay] = useState('none');
    const [detail, setDetail] = useState('');
    let [error, setError] = useState('');
    const showDetail = (event) => {
            fetch(`https://api.github.com/users/${event.target.value}`)
            .then(data => data.json())
            .then((res) => {
                
                if(res.message){
                    display = 'none';
                    setDisplay(display);
                    setError(res.message);
                }
                else{
                    display = 'block';
                    setError(null);
                    setDisplay(display);
                    console.log(res);
                    setDetail(res);
                }
            });
    }
    return(
        <div className="githubUser">
            <h1>User Details</h1>
            <input onChange= { (event) => showDetail(event) } placeholder="search user"></input>
            <p>{ error }</p>
            <div className="userInfo" style={{display: display}}>
                <img src= { detail.avatar_url } alt="user"></img>
                <h3>Username- { detail.login }</h3>
                <h3>Name- { detail.name }</h3>
                <h3>Bio- { detail.bio }</h3>
                <h3>Repos- { detail.public_repos }</h3>
                <h3>Following- { detail.following }</h3>
                <h3>Followers- { detail.followers }</h3>
            </div>
        </div>
    )
}

export default GetGithubUser;