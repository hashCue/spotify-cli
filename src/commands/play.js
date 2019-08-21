module.exports = {
    name: 'play',
    alias: ['p'],
    run: async toolbox => {
        const { api, prompt, parameters} = toolbox
        const id = parameters.first
        const select = await api()

        let body = {"uris": []}
        body.uris.push(id)

        let response = await select.put('/me/player/play', body)

        return response   

    }
}