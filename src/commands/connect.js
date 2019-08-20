module.exports = {
    run: async toolbox => {
      const { print, connect, prompt, filesystem } = toolbox
      const fs = require('fs')
      
      connect()

      const askAccess = { type: 'input', name: 'accessToken', message: 'What is your access token?' }
      const askRefresh = { type: 'input', name: 'refreshToken', message: 'What is your refresh token?' }

      const questions = [askAccess, askRefresh]
      const { accessToken, refreshToken } = await toolbox.prompt.ask(questions)
      
      const json = {accessToken, refreshToken}
      
      filesystem.write(__dirname + '/../config/tokens.json', json)

    },
  }