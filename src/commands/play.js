module.exports = {
    name: 'play',
    alias: ['p'],
    run: async toolbox => {
        const { api, prompt, parameters} = toolbox
        const id = parameters.first
        const select = await api()

        let body = {"uris": ["spotify:track:48VsT5UCEE458bRZZiZN5w", "spotify:track:1301WleyT98MSxVHPZCA6M"]}

        let response = await select.put('/me/player/play', body)

        return response

    


    }
}