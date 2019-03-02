import assert from 'assert'
import { Download } from './../src/index'

describe('Download', () => {

  describe('[default] constructor', () => {
    it('Should return the default value', () => {
      const download = new Download()
      assert.equal(download.url , 'http://localhost:80/')

      assert.equal(download.pack, 'http://localhost:80/pack')
      assert.equal(download.mods, 'http://localhost:80/mods')
    })
  })

  describe('[defined] constructor', () => {
    it('Should return the defined value', () => {
      const download = new Download(
        { server: '127.0.0.1', port: 8081, https: true },
        { pack: 'link/pack', mods: 'link/mods' } 
      )
      assert.equal(download.url , 'https://127.0.0.1:8081/')

      assert.equal(download.pack, 'https://127.0.0.1:8081/link/pack')
      assert.equal(download.mods, 'https://127.0.0.1:8081/link/mods')
    })
  })
  
})