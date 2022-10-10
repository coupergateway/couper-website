export default `server {

  endpoint "/public/**" {
    path = "/**"

    proxy {
      backend {
        origin = "https://httpbin.org"
      }
    }
  }
}`
