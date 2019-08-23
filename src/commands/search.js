module.exports = {
    name: 'search',
    alias: ['s'],
    run: async toolbox => {  
        const { parameters, api, prompt, play } = toolbox
        const search = await api()
        const playback = await play()
        const subcommand = parameters.first
        const query = parameters.second



        let queryParams = {
            q: query,
            type: '',
            limit: 5,
        }

        let results, matches, data

        switch(subcommand) {
            case 'artists':
                queryParams.type = 'artist'
                results = await search.get('/search', queryParams)
                matches = [...results.data.artists.items].map(match => {
                    return {
                        name: match.name,
                        uri: match.uri
                    }
                })
                console.log(matches)
                break;
            case 'playlists':
                console.log('search for playlist')
                break;
            case 'albums':
                queryParams.type = 'album'
                results = await search.get('/search', queryParams)
                matches = [...results.data.albums.items].map(match => {
                    return {
                        name: match.name,
                        uri: match.uri
                    }
                })
                console.log(matches)
                
                break;
            case 'tracks': 
                queryParams.type = 'track'
                results = await search.get('/search', queryParams)
                console.log(results.data)
                matches = [...results.data.tracks.items].map(match => {
                    return {
                        name: match.name,
                        uri: match.uri
                    }
                })
                console.log(matches)
                break;
            default: 
                console.log('search')
                break;   
            
        }

        

    }
}