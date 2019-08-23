module.exports = async toolbox => {
    toolbox.list = async () => {
    const { prompt, } = toolbox

    const { accessToken } = await tokens()

  
    const spotifyApi = toolbox.http.create({
      baseURL: 'https://api.spotify.com/v1/',
      headers: { Authorization: `Bearer ${accessToken}` },
    }) 
    }
  }