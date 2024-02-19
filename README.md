Requirements:
 - You have to have `docker`. [how to install](https://docs.docker.com/engine/install/)
 - You have to have `make`. Install on debian based dist `sudo apt install make`.

Quick start:
```bash
    # build images
    make build
    # load test data 
    make test_data_reset
    # run app
    make run
```
Open [localhost](http://localhost) to see the app.
Django Admin [here](http://localhost/admin/). Test user is `admin` with pass `123456`.



Time Tracking:
1. 2 HOURS. I used my own project template, but I had to cut everything unnessary like authentication, notifications etc.
2. 1 HOUR.  For work with locations I had to update postgres with postgis. Finally I found ready to use docker image.
3. 2 HOUR.  Created models and API for it. Created test data. Something wrong with load fixtures. Used band-aid.
4. 2 HOUR.  Worked on UI components. I did not find good solusion how to parse location string, I did it manually.
5. 1 HOUR.  Worked on UI components. (see git history)
6. 1 HOUR.  Worked on UI. Updated README.md
