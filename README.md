# Simple WebSocket client made with Nuxt 3 and Capacitor

### Run capacitor app on android

```bash
# npm
npm install
npm run generate
npx cap add android

# to start debugging
npx cap run android

# or to launch in android studio
npx cap open android
```

### Set Up with localserver
For the server I used [this simple ws server](https://github.com/neverFeltAlive/ws-server.git)

- To connect android emulator to local ws server change localhost in nuxt.config.ts to 10.0.2.2
- After running `npm run generate && npx cap sync` add `android:usesCleartextTraffic="true"` to application tag in AndroidManifest.xml
