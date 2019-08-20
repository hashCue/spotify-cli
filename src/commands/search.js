module.exports = {
    name: 'search',
    alias: ['s'],
    run: async toolbox => {  
        const { parameters, api, prompt } = toolbox
        const search = await api()
        const subcommand = parameters.first
        const query = parameters.second

        let queryParams = {
            q: query,
            type: '',
            limit: 5,
        }

        let results, matches

        switch(subcommand) {
            case 'artist':
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
            case 'playlist':
                console.log('search for playlist')
                break;
            case 'album':
                queryParams.type = 'album'
                results = await search.get('/search', queryParams)
                matches = [...results.data.albums.items].map(match => {
                    return {
                        name: match.name,
                        id: match.id
                    }
                })
                console.log(matches)
                
                break;
            case 'track': 
                console.log('search for track')
                break;
            default: 
                console.log('search')
                break;   
            
        }

        

    }
}