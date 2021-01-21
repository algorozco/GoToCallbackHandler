# GoToCallbackHandler
I built this basic server to illustrate a typical set up to handle callbacks coming from the hellosign api.

The primary things a callback handler must to have are:
1. A secure, public url.
2. A route that accepts post requests in multipart/form-data format.
3. Before doing any other event parsing, it should send back a 200 status response, along with the plain text response of 'hello api event received.'

I also recommend to check the callback headers for additional validation: https://app.hellosign.com/api/eventsAndCallbacksWalkthrough#CallbackHeaders but this is not required.

#### Testing HelloSign callbacks locally
The callback url must be a secure, public url. in the case of testing locallly, you'd need to build a tunnel from a public url to your local host, and use such url as the callback url. there are several tools out there that can help to achieve this, my personal favorite is '[ngrok](https://ngrok.com/ "ngrok")'. steps to set it up can be found on their site: https://ngrok.com/docs.

once it's up and running, you will simply need to use the public url given by the tool and use it as the callback url, it will "forward" the traffic to your local host and you will be able to launch what's behind it.

###### Resources
**Using hellosign api callbacks**: https://www.hellosign.com/blog/using-hellosign-api-callbacks
**Documentation**: https://app.hellosign.com/api/eventsandcallbackswalkthrough and https://app.hellosign.com/api/reference#callbacks
**API dashboard (to see sent callbacks)**: https://app.hellosign.com/apidashboard
**Testing locally**: https://faq.hellosign.com/hc/en-us/articles/217048987-tools-for-testing-the-api-and-callbacks-locally

###### Questions?
Hit me up at algorozco.ti@gmail.com!
