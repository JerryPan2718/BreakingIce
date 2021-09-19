import React from "react";
import postRequest from "../util/postRequest";



const ViewGame = (uuid) => (
    // let { id } = useParams();
    let endpoint = "getGame";
let postBody = {
    UUID: uuid
};
postRequest(endpoint, postBody, (res) => console.log(res));
var gameObj = postRequest(endpoint, body, cb); < div >

    React.useEffect(() => {
        postRequest("getTags", {}, (res) => {
            setTags(res);
        })
    }, []
    );
    <h1 className="title is-1">{game["name"]} created by {game["creatorName"]}<br></br></h1>
    <h6 className="likes">game["likes"] - game["tags"]</h6>
    <h2 className="description">game["description"]<br></br></h2>
    <h2 className="rules">game["description"]<br></br></h2>
    <h3 className="rules">Game Minimum Players: game["minPlayers"]<br></br></h3>
    <h3 className="rules">Game Maximum Players: game["maxPlayers"]<br></br></h3>


    <p>
        {/* let {id} = useParams(); */}

    </p>
</div >
);

export default ViewGame;