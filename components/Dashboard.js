import Body from "./Body"
import Right from "./Right"
import Sidebar from "./Sidebar"
import SpotifyWebApi from "spotify-web-api-node";
import { useRecoilState } from "recoil";
import { playingTrackState } from "../atoms/playerAtom";

const spotifyApi = new SpotifyWebApi({
    clientId:"257f87f721094fe7bfaa12d176f17faf",

})

function Dashboard() {
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

    const chooseTrack = (track) => {
        setPlayingTrack (track);

    }


    
    return (
        <main>
            <Sidebar/>
            <Body chooseTrack={chooseTrack} spotifyApi={spotifyApi}/>
            <Right/>
            
           
        </main>
    )
}

export default Dashboard
