module.exports = async toolbox => {
    toolbox.api = async () => {
     const { http, tokens } = toolbox

     const { accessToken } = await tokens()


     const spotifyApi = toolbox.http.create({
        baseURL: 'https://api.spotify.com/v1/',
        headers: { Authorization: `Bearer ${accessToken}` },
    })

     return spotifyApi

    }
  }