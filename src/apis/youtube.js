import axios from 'axios';

const KEY = 'AIzaSyDSNbSmtrJmfTRASEthuo4XuwHBagI23KE';

export default axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResults: 10,
            key: KEY
        }
});
