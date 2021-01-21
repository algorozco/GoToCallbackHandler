# GoToCallbackHandler
I built this basic server to illustrate a typical set up to handle callbacks coming from the HelloSign API.

The primary things a callback handler must to have are:
1. A secure, public url.
2. A route that accepts post requests in multipart/form-data format.
3. Before doing any event parsing, it should send back a 200 status response, along with the plain text response of 'hello api event received.'

I also recommend to check the callback headers for additional validation: https://app.hellosign.com/api/eventsAndCallbacksWalkthrough#CallbackHeaders but this is not required.

#### Testing HelloSign callbacks locally
The callback URL must be a secure, public URL. In the case of testing locallly, you'd need to build a tunnel from a public URL to your local host, and use such URL as the callback URL. There are several tools out there that can help to achieve this, my personal favorite is '[ngrok](https://ngrok.com/ "ngrok")'. Steps to set it up can be found on their site: https://ngrok.com/docs.

Once it's up and running, you will simply need to use the public URL given by the tool and use it as the callback URL, it will "forward" the traffic to your local host and you will be able to launch what's behind it.

###### Resources
**Using HelloSign API Callbacks**: https://www.hellosign.com/blog/using-hellosign-api-callbacks
**Documentation**: https://app.hellosign.com/api/eventsAndCallbacksWalkthrough and https://app.hellosign.com/api/reference#Callbacks
**API Dashboard (so see sent callbacks)**: https://app.hellosign.com/apidashboard
**Testing Locally**: https://faq.hellosign.com/hc/en-us/articles/217048987-Tools-for-testing-the-API-and-callbacks-locally

###### Questions/Comments?
Hit me up at algorozco.ti@gmail.com!
