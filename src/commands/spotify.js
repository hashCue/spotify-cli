
module.exports = {
  name: 'spotify',
  run: async toolbox => {
    const { print } = toolbox
    print.info('Welcome to your CLI')
    print.info(`Hello CLI, it's good to meet you`)
  }
}
