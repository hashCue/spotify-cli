module.exports = async toolbox => {
    toolbox.info = async () => {
        const { playback } = toolbox
        
        let info = await playback()


        const {artists, name} = info.item

        const artistName = artists[0].name

        return `now playing: ${name} by ${artistName}`
    }
  }