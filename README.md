This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Welcome to Vision Log Lens
Vision Log lens helps you to quickly access insightful information about `.log` files


# `.log` files supported
At the momment this app only support CLF `.log` files.

CLF stands for `Common Log Format` and is a format used by web servers when generating server log files.

CLF format example:

```
177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"
```


[Find more info about CLF files here](https://en.wikipedia.org/wiki/Common_Log_Format)

## Web app

First, install the dependencies
```
npm install
```

Then, run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) with your 
browser
2. Select a valid `.log` file and upload it using the web-ui
3. Check the loaded `.log` file
3. Click in upload a new `.log` file
4. Repeat from step 2



## Backend APIs

```
NOTE: The same command to run the development server will start the backend APIs. There are no additional steps.
```

### Endpoints available

### /logs/list - [GET]
It will return all `.log` files under the folder `./public/logs`

##### cURL example
```
curl --location 'http://localhost:3000/api/log/list'
```

### /logs/upload - [POST]

Allow users to upload `.log` files to the folder `./public/logs`

##### cURL example
```
curl --location 'http://localhost:3000/api/log/upload' \
--form 'file=@"/path/to/file/log 1.log"'
```

### /log/load - [GET]

Allow users to load files tha have been already upload to the folder `./public/logs`

```
curl --location 'http://localhost:3000/api/log/load/?path=77c82833-c71d-4618-8710-288e0d02ac68_log-2.log'

```

## Useful Info

Under the folder `public/logs` you can find a file named `1_log.example`. 

This is an example log file. In order to use it, rename it to: `1-mylog.log`

Then if you refresh the web-ui, you will be able to see it in the list of available logs.

Alternatively, you can also use this example `.log` to upload using the app.

## TODO before Production
- [  ] Extract a few hardcoded information to `.env` variables
- [  ] Finish some unit tests in different parts of the app
- [  ] Develop e2e tests using playwright or other alternatives
- [  ] Congfigure the production deployment to use a CI/CD pipeline

