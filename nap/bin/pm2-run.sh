source bin/credentials-camperbot.sh

set -x

GITTER_USER_TOKEN=${GITTER_USER_TOKEN} \
    GITTER_APP_KEY=${GITTER_APP_KEY} \
    GITTER_APP_SECRET=${GITTER_APP_SECRET} \
    LOG_LEVEL=10 \
    BOT_APP_HOST=bot.freecodecamp.com \
    PORT=7891 \
    pm2 start app.js --name bot --interpreter iojs

    # iojs app.js
    # node --harmony app.js
    # nodemon -x iojs app.js