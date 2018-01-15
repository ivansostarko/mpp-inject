# MPP - Inject
---
Powerful XSS Tool for collecting all `<forms>` data on website.

![alt text](/assets/mpp-logo.png "Logo")

[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg?style=for-the-badge)]()
[![DUB](https://img.shields.io/dub/l/vibe-d.svg?style=for-the-badge)]()
[![GitHub top language](https://img.shields.io/github/languages/top/badges/shields.svg?style=for-the-badge)]()

## Disclaimer
I am not responsible for any damage done using this tool. This tool should only be used for educational purposes and for penetration testing.


## What is XSS?
Cross-site scripting (XSS) is a code injection attack that allows an attacker to execute malicious JavaScript in another user's browser.

## Built With
1.  JavaScript (Client App)
2.  NodeJS (Server App)
3.  OrientDB (Database)


## Key Features
1. Collects all data from <form> element on website.
2. Crypt and decrypt all data.
3. Defining triggers for collecting data (click, submit...)
4. Defining input types for collecting data (text, number, password...)
5. Defining input names for collecting data.
6. Script doesn't work while browser dev tools are open.
7. Scheduler.


## Installation & Docker Compose

`git clone https://github.com/IvanSostarko/mpp-inject.git`

`cd mpp-inject`

`docker-compose up`


Docker Compose will create 3 containers.

| Name                |  IP + PORTS        | Description                       |
| --------------------|:------------------:| ---------------------------------:|
| mpp-inject-nginx    | 10.1.0.2:8000      | Client App                        |
| mpp-inject-nodejs   | 10.1.0.4:8001      | Server App                        |
| mpp-inject-orientdb | 10.1.0.3:8002,8003 | Database and Database admin tool  |


## Start server app

`docker exec -i -t mpp-inject-nodejs /bin/bash `

`npm install`

`node server.js`

# Example Use

Skripta se može uključiti na 3 načina
1. Clijent.js
2. Client.min,js
3. Inject code

Unutar Klijentse aplikacije potrebno je definirati:

## Debug Mode
Debug Mod se može uključiti na klikjent i server app.

### Client app
slika
### Server app
slika

## Database Admin
[![alt text](/assets/db_admin.png)](https://raw.githubusercontent.com/IvanSostarko/mpp-inject/master/assets/db_admin.png)

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D


## To do

## License (MIT)

Copyright (c) 2018 Ivan Sostarko

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
