class Download {

  /**
   * @param { Object } server_config config for the server
   * @param { Object } server_game config for the game
   * 
   * @param { string } [ server_config.server = localhost ] url like localhost, or ip
   * @param { number } [ server_config.port = 80 ] port number like 80, 8080 ...
   * @param { boolean } [ server_config.https = false ] if the server is on https or no (http)
   * 
   * @param { string } [ server_game.pack = 'pack'] url for the resource pack
   * @param { string } [ server_game.mods = 'mods' ] url for the mods pack
   */
  constructor (
    { server, port, https } = { server: 'localhost', port: 80, https: false }, 
    { pack, mods } = { pack: 'pack', mods: 'mods' }
  ) {
    this.url = `${ (https ? 'https' : 'http') }://${ server }:${ port }/`
    this.pack = `${ this.url }${ pack }`
    this.mods = `${ this.url }${ mods }`
  }

  /**
   * Download data to a url on your computer
   * @param { string } to 
   */
  download (to) {
    
  }

}

export { 
  Download
}