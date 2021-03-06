const {
  GraphQLUpload
} = require('graphql-upload')

class Resolver {
  /**
   * Constructor
   * @param {ApiService} service
   */
  constructor (service) {
    this.service = service
  }

  init () {
    const resolvers = {
      Upload: GraphQLUpload,
      fetchAllNFTs: this.service.fetchAllNFTs.bind(this.service),
      fetchNFT: this.service.fetchNFT.bind(this.service),
      fetchNFTsByOwner: this.service.fetchNFTsByOwner.bind(this.service),
      fetchOffers: this.service.fetchOffers.bind(this.service),
      fetchBattles: this.service.fetchBattles.bind(this.service),
      postMintNFT: this.service.postMintNFT.bind(this.service),
      postUploadImage: this.service.postUploadImage.bind(this.service),
      postPollingNFTOwners: this.service.postPollingNFTOwners.bind(this.service),
      postMakeOffer: this.service.postMakeOffer.bind(this.service),
      postAcceptOffer: this.service.postAcceptOffer.bind(this.service),
      postDeclineOffer: this.service.postDeclineOffer.bind(this.service)
    }
    return resolvers
  }
}

module.exports = Resolver
