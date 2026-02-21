# StarMar - Platform Media Sosial

<p align="center">
  <img src="src/assets/Logo/StarMar-.png" alt="Logo StarMar" width="220"/>
</p>

<p align="center">
  <a href="https://github.com/faizinuha/StarMar2/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/faizinuha/StarMar2?color=blue&style=for-the-badge" alt="License">
  </a>
  <a href="https://github.com/faizinuha/StarMar2/issues">
    <img src="https://img.shields.io/github/issues/faizinuha/StarMar2?color=yellow&style=for-the-badge" alt="Issues">
  </a>
  <a href="https://github.com/faizinuha/StarMar2/network/members">
    <img src="https://img.shields.io/github/forks/faizinuha/StarMar2?color=orange&style=for-the-badge" alt="Forks">
  </a>
  <a href="https://github.com/faizinuha/StarMar2/stargazers">
    <img src="https://img.shields.io/github/stars/faizinuha/StarMar2?color=red&style=for-the-badge" alt="Stars">
  </a>
  <a href="https://github.com/faizinuha/StarMar2/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/faizinuha/StarMar2?color=brightgreen&style=for-the-badge" alt="Contributors">
  </a>
</p>

StarMar adalah platform media sosial modern yang dirancang untuk menghubungkan orang, berbagi kreativitas, dan membangun komunitas. Pengguna dapat memposting cerita, berbagi meme, membuat postingan, terhubung dengan teman, dan menjelajahi tren terbaru.

**Demo:** [https://starmar2.vercel.app](https://starmar2.vercel.app)
**Domain Tambahan:** [https://wigstar.vercel.app](https://wigstar.vercel.app)

---

## 🚀 Fitur Utama

* **Autentikasi:** Email/password + OAuth (Google & GitHub)
* **Postingan:** CRUD, likes, komentar, dan interaksi real-time
* **Cerita (Story):** Konten sementara ala Instagram Stories
* **Meme:** Ruang khusus untuk berbagi dan menjelajahi meme
* **Profil:** Avatar, bio, dan personalisasi
* **Followers System:** Ikuti & diikuti
* **Notifikasi:** Like, follow, komentar, mention
* **Explore Page:** Temukan postingan trending
* **Admin Panel:** Kelola user & konten
* **Direct Message:** Chat langsung antar pengguna
* **Tagar (Hashtag):** Indexing konten agar mudah ditemukan
* **Bookmark:** Simpan postingan
* **Mode Gelap/Terang:** UI nyaman untuk semua kondisi
* **SEO Friendly:** Canonical otomatis untuk dua domain (Starmar & Wigstar)

---

## 🛠️ Teknologi

### Frontend

* React + Vite
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* Supabase (Auth, Database, Storage)

### Deployment

* Vercel (mendukung multi-domain + canonical dinamis)

---

## ⚙️ Cara Memulai

### Prasyarat

* Node.js
* Akun Supabase

### Instalasi

1. Clone:

```sh
git clone <URL_REPO_ANDA>
cd StarMar2
```

2. Instal dependensi:

```sh
npm install
```

3. Tambahkan **.env**:

```env
VITE_SUPABASE_URL=URL_SUPABASE
VITE_SUPABASE_ANON_KEY=ANON_KEY
VITE_SITE_URL=http://localhost:5173
```

4. Setup auth callback di Supabase:

* [http://localhost:5173/auth/callback](http://localhost:5173/auth/callback)
* [https://starmar2.vercel.app/auth/callback](https://starmar2.vercel.app/auth/callback)
* [https://wigstar.vercel.app/auth/callback](https://wigstar.vercel.app/auth/callback)

5. Jalankan:

```sh
npm run dev
```

---

## 🌍 SEO – Sudah Siap Dicari Google

StarMar sudah dioptimalkan dengan:

* Canonical otomatis untuk dua domain (starmar2 & wigstar)
* OG tags dinamis (URL menyesuaikan domain)
* Sitemap valid
* robots.txt sesuai best practices
* Meta tags lengkap (title, description, author)
* Hashtag indexing dengan sistem tag bawaan
* Category & tag dapat terbaca crawler Google
* Page sudah diverifikasi Google Search Console

Google dapat menemukan StarMar melalui:

* Nama brand: **StarMar** atau **Wigstar**
* Hashtag di postingan (#fun, #meme, #story, dst.)
* Kategori (meme, explore, stories, trending)

---

## 📦 Deployment di Vercel

Proyek ini sudah mendukung **dua domain** sekaligus:

* starmar2.vercel.app
* wigstar.vercel.app

Canonical otomatis memastikan keduanya dapat terindex Google tanpa duplikasi.

---

## 🤝 Kontribusi

1. Fork repositori
2. Buat branch fitur

```sh
git checkout -b feature/FiturBaru
```

3. Commit

```sh
git commit -m "Tambah fitur baru"
```

4. Push & Pull Request

Jangan lupa kasih ⭐ di GitHub ya 💙

---

© 2025 StarMar | Dibangun dengan cinta dan kreativitas.
