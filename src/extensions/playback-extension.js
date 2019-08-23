module.exports = async toolbox => {
  toolbox.playback = async () => {
   const { http, tokens } = toolbox

   const { accessToken } = await tokens()

   const spotifyApi = http.create({
     baseURL: 'https://api.spotify.com/v1/me/player/',
     headers: { Authorization: `Bearer ${accessToken}` },
    })
    
    const { data } = await spotifyApi.get() 
   return data

  }
}