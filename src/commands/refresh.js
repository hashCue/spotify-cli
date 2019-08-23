module.exports = {
    name: 'refresh',
    alias: ['r'],
    run: async toolbox => {
        const { tokens } = toolbox
        const { refreshToken } = await tokens()

        console.log('creating refresh instance')

        const refresh = toolbox.http.create({
            baseURL: 'https://spotify-cli.herokuapp.com'
        })

        const newToken = await refresh.get('/refresh_token', {
            refresh_token: refreshToken
        })

        console.log(newToken.data)
        
        await toolbox.patching.update(__dirname + '/../config/tokens.json', tokens => {
            console.log('patching')
            tokens.accessToken = newToken.data.access_token
            return tokens
          })

          

    }
}