module.exports = {
    name: 'next',
    alias: ['p n'],
    run: async toolbox => {
        const { api, print, info } = toolbox
        const select = await api()

        await select.post('/me/player/next')
        print.info(await info())

    }
} 