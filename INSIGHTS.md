# Architecture 
## Hosting
Initial requirements:
- deploy frontend on NextJS
- deploy backend on Python FastAPI
- keep it secure
- keep normal cost

RAILWAY Was chosen:
- to keep services in 1 VPC
- make secure communication
- private network is free
- ability to set Cloudwatch Tunnel

# RAILWAY
## HOW TO USE PRIVATE NETWORKING IN RAILWAY
- use HTTP
- specify port
- use ["::", "0.0.0.0"] for backend to have support of ipv6

