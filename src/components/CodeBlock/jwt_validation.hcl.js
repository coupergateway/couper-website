export default `server {

  endpoint "/private/**" {
    access_control = ["accessToken"]
    path = "/**"

    proxy {
      backend {
        origin = "https://httpbin.org"
      }
    }
  }
}

definitions {
  jwt "accessToken" {
    signature_algorithm = "RS256"
    key_file = "keys/public.pem"
    header = "Authorization"
  }
}`
