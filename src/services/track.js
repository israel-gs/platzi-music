import platziMusicService from './platzi-music'

const trackService = {

}

trackService.search = (q) => {
  const type = 'track'

  return platziMusicService.get('/search', {
    params: { q, type }
  })
    .then((res) => {
      return res.data
    })
}

trackService.getById = (id) => {
  return platziMusicService.get(`/tracks/${id}`)
    .then((res) => {
      return res.data
    })
}

export default trackService
