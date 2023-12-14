<p align="center">
    <img src="./media/thumbnail.jpg" width="100%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">Kanao Multidevices</h1>


## Information
This bot is still in beta!

Original base by 
[`BochilGaming`](https://github.com/BochilGaming/games-wabot-md)
[`Azami Bot`](https://github.com/clicknetcafe/azamibot-md-multi)

Jika anda ingin menambahkan node_module secara manual, Bisa download di sini 
[`node_modules`](https://cutt.ly/zeren-node-modules)

Script ini memakai baileys multi device dari 
[`@whiskeysockets/baileys`](https://github.com/whiskeysockets/baileys)

## Join Groups Bot WhatsApp 
[![Touch Me >,<](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/J8WiCu5VOyVJepV1dOe92A)

#### Heroku Buildpack
| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |

### FOR TERMUX USER
1. Type mentioned below given commands one by one in Termux.
```sh
$ pkg upgrade && pkg update
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ pkg install libwebp -y
$ git clone https://github.com/clicknetcafe/azamibot-md-multi
$ cd azamibot-md-multi
$ npm i 
```
If error try using yarn instead of npm, see [here](https://github.com/BochilGaming/games-wabot/tree/multi-device#if-npm-install-failed--try--using-yarn-instead-of-npm)
```sh
$ node .
```
2. Wait for bot starting...
3. Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Click on `link a device`)
   NOTE : use node `node . --pairing` if you want to link device with phone number
4. Now your bot is ready to rock n roll.

#### If npm install failed, try using yarn instead of npm
```sh
$ pkg install yarn -y
$ yarn install
```
---------

## INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & GAMES-WABOT ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/clicknetcafe/azamibot-md-multi
cd azamibot-md-multi
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/clicknetcafe/azamibot-md-multi
cd azamibot-md-multi
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--pairing`

Link a device with phone number

### `--mobile`

Link a device with mobile captcha (prons to ban)

### `--self`

Activate self mode (Ignores other except bot and rowner)

### `--pconly`

If that chat not from private bot, bot will ignore (except premium user)

### `--gconly`

If that chat not from group, bot will ignore (except premium user)

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--autocleartmp`

If enabled, **tmp* folder contain files will be auto delete

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--db`

pass mongodb url or cloud url to connect to database, by the default it will connect to database.json

---------

## FAQ
### Mengapa plugin saya tidak berfungsi di multi-perangkat ini?
      
> Please check syntax errors on your plugins. and maybe your script still uses CJS
> This multi-device script uses ESM and CJS [(legacy code)](https://github.com/clicknetcafe/azamibot-md-multi/tree/main) not supported yet. Learn more about [ESM](https://nodejs.org/api/esm.html)

### Bagaimana cara menghapus sesi?

> Anda dapat menghapus folder `sesi` atau menjalankan perintah ```rm -rf sessions```

### Mengapa saya tidak dapat memindai kode qr?

> jika kesalahan anda seperti ini ```(node:7016) UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_ARG_TYPE]: The "key" argument must be of type string or an instance of Buffer, TypedArray, DataView, or KeyObject. Received undefined``` Anda dapat gunakan [multi-device branch](https://github.com/clicknetcafe/azamibot-md-multi/tree/multi-device)

### Bagaimana cara mengubah nomor owner?

> Anda dapat mengaturnya di `config.js`, di global.mods. dan gunakan perintah .addrealowner saat bot berjalan.
```js
global.mods = ['6281398274790']
```
> Argumen pertama pada array adalah angka seperti `6281398274790`, Anda dapat mengisi argumen kedua dan seterusnya dengan angka lain


### Bagaimana cara membaca folder dalam folder plugin sebagai file plugin?

> Ubah opsi `'recursiveRead'` menjadi `'true'` di file main.js di fungsi `loadPluginFiles`


---------

### ingin berkontribusi?
1. fork repository ini
2. Ubah/edit/buat apa yang Anda inginkan. misalnya Anda dapat menambahkan fitur, memperbaiki bug, dll
3. jika pull req Anda sudah ada di **acc/merge**, Anda dapat menghapus cabang Anda atau Anda dapat membuat pull req lagi :)

---------


### Thanks To 
**Allah SWT**,

**Orang Tua**,

**Semua yang selalu mendukung**


#### Special Thanks to
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)

#### Contributor
[![Adiixyz](https://github.com/Adiixyz.png?size=100)](https://github.com/Adiixyz)
[![idhamthoriqbot](https://github.com/idhamthoriqbot.png?size=100)](https://github.com/idhamthoriqbot)
[![BlueShiYT](https://github.com/BlueShiYT.png?size=100)](https://github.com/BlueShiYT)
[![zatu22](https://github.com/zatu22.png?size=100)](https://github.com/zatu22)
[![unx21](https://github.com/unx21.png?size=100)](https://github.com/unx21)
[![botstylee](https://github.com/botstylee.png?size=100)](https://github.com/botstylee)
[![Jauhariq](https://github.com/Jauhariq.png?size=100)](https://github.com/Jauhariq)
[![Nobuyaki](https://github.com/Nobuyaki.png?size=100)](https://github.com/Nobuyaki)
[![Aiinne](https://github.com/Aiinne.png?size=100)](https://github.com/Aiinne)
[![arisawali2014](https://github.com/arisawali2014.png?size=100)](https://github.com/arisawali2014)
[![ryznxx](https://github.com/ryznxx.png?size=100)](https://github.com/ryznxx)
[![ZeroChanBot](https://github.com/ZeroChanBot.png?size=100)](https://github.com/ZeroChanBot)
[![Bintangp02](https://github.com/Bintangp02.png?size=100)](https://github.com/Bintangp02)
[![itsmeR1F4I](https://github.com/itsmeR1F4I.png?size=100)](https://github.com/itsmeR1F4I)
[![DineshValor](https://github.com/DineshValor.png?size=100)](https://github.com/DineshValor)
[![TeamMars20](https://github.com/TeamMars20.png?size=100)](https://github.com/TeamMars20)
[![Im-Dims](https://github.com/Im-Dims.png?size=100)](https://github.com/Im-Dims)
