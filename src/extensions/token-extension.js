module.exports = async toolbox => {
    toolbox.tokens = async () => {
        const { filesystem } = toolbox
        const tokens = await filesystem.read(__dirname + '/../config/tokens.json')
        return JSON.parse(tokens)
    }
  }