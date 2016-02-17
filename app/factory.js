// // angular.module('Factory', ['oauth-signature', 'oauth'])
// app.factory('yelp', function($location, $http){
//    function retrieveYelp(search, callback) {
//       function randomString(length, chars) {
//       var result = '';
//       for(var i = length; i > 0; --i) {
//        result += chars[Math.round(Math.random() * (chars.length - 1))];
//        return result;
//        }
//    }
//    var method = 'GET';
//    var url = 'http://api.yelp.com/v2/search';
//    var params = {
//        location: 'Los+Angeles',
//        oauth_consumer_key: 'AgSeqsEmmShlC46CY65RrA', //Consumer Key
//        oauth_token: 'qB65UL7X0eInk7n9bxCME4lHgQeZ4hJH', //Token
//        oauth_signature_method: "HMAC-SHA1",
//        oauth_timestamp: new Date().getTime(),
//        oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
//        term: search
//    };
//    var consumerSecret = 'Z1qCGN-gHzLjwkcSYfwlYJG1t_E';
//    var tokenSecret = 'VJPodbX_pRYTP_v-ivtWEu65oTg';
//    var signature = oauth_signature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
//    params['oauth-signature'] = signature;
//    $http.jsonp(url, {params: params}).success(callback);
// }
//
//  return {
//    retrieveYelp: retrieveYelp
//  }
// });
