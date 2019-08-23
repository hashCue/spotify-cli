module.exports = {
    name: 'play',
    alias: ['p'],
    run: async toolbox => {
        const { api, prompt, parameters, playback, info} = toolbox
        const id = parameters.first
        const type = id.split(':')[1]
        const select = await api()

        let body = (type === 'track') ? {'uris': [id]} : {'context_uri': id} 

        await select.put('/me/player/play', body)

        let playbackInfo = await playback()
        
        console.log(await info())

    }
} 