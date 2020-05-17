# Terpusat

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Terpusat - Pusat belanja, investasi, layanan, informasi di Indonesia

### Layanan

- Terpusat Store

- Terpusat Style

- Terpusat Investment

- Terpusat techno

### Cara Menggunakan

Repository ini akan membantu developer Terpusat Group untuk melakukan update ke frontend [terpusat](https://terpusat.com). Repository ini menggunakan [Create React App](https://create-react-app.dev/docs/getting-started/). Beberapa command yang digunakan untuk melakukan development, test hingga deployment berikut ini:

#### Setup

Sebelum menjalankan command untuk menjalankan aplikasi. Pertama kali pastikan semua dependency yang dibutuhkan untuk menjalankan aplikasi Terpusat Frontend terpenuhi. NodeJS `>=10.17.0 <12.2.0` dan yarn `>=1.22.4`. Setelah terpenuhi, jalankan command di bawah ini.

```sh
yarn
```

#### Developemnt

Setelah semua dependency terinstall, untuk menjalankan aplikasi Terpusat Frontend di development, jalankan command di bawah ini. Aplikasi akan terbuka otomatis pada web browser yang terinstall di device.

```sh
yarn start
```

#### Test

Untuk memastikan kualitas code dari aplikasi Terpusat Frontend, pastikan kamu menulis unit test. Adalah sebuah keharusan untuk menulis test di setiap module.

```sh
yarn test
```

#### Deployment

Telah terintegrasi dengan [vercel](https://vercel.com/), aplikasi Terpusat Frontend dapat di publikasikan secara langsung dengan menjalankan command di bawah ini.

```sh
yarn deploy
```
