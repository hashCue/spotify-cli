
module.exports = {
    name: 'toggle',
    alias: ['t'],
    run: async toolbox => {

        const { tokens, playback } = toolbox

        const { accessToken } = await tokens()
        
        const data = await playback()

        const { is_playing } = data || {} 
        

        const spotifyApi = toolbox.http.create({
            baseURL: 'https://api.spotify.com/v1/me/player/',
            headers: { Authorization: `Bearer ${accessToken}` },
          })
        
        if (is_playing) {
            await spotifyApi.put('/pause')
            console.log('paused')
        } else {
            await spotifyApi.put('/play')
            console.log('playing')
        }
        
        
          

    }
}