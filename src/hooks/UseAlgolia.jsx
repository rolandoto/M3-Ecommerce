import  si from 'search-insights'

const VITE_ALGOLIA_APP_ID='4IFFON8EJ0'
const VITE_ALGOLIA_API_KEY='56a634abceb493f46972fe44be430b0b'
const VITE_ALGOLIA_INDEX_NAME='store-'

si('init',{
    appId:VITE_ALGOLIA_APP_ID,
    apiKey:VITE_ALGOLIA_API_KEY,
    useCookie: true
})

const UseAlgolia =() =>{
    const senProduct = (id) =>{
        si('convertedObjectIDs',{
            index:VITE_ALGOLIA_INDEX_NAME,
            eventName:'prodcut cart',
            objectIDs:[id]
        })
    }

    const senProductview =(id) =>{
        si('viewedObjectIDs',{
            index:VITE_ALGOLIA_INDEX_NAME,
            eventName:'prodcut view',
            objectIDs:[id]
        })
    }

    return {
        senProduct,
        senProductview
    }
}

export default UseAlgolia