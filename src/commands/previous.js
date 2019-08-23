module.exports = {
    name: 'prev',
    alias: ['p n'],
    run: async toolbox => {
        const { api, print, info } = toolbox
        const select = await api()

        await select.post('/me/player/previous')

        console.log(await info())

    }
} 