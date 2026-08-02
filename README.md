Nefes egzersizlerine odaklanan interaktif bir kişisel web sitesi.

Canlı site: https://yoga-sitesi.vercel.app

Proje Planı

Genel Bakış

Nefes egzersizlerine odaklanan, kullanıcıya rehberlik eden interaktif bir kişisel web sitesi. Site; bir giriş (hero) bölümü, Pranayama (nefes egzersizleri) bölümü ve iki farklı interaktif nefes egzersizi animasyonu içerir.

Teknoloji Yığını (Tech Stack)

Framework: Next.js (App Router)
Dil: TypeScript
Stil: Tailwind CSS
Animasyon: Framer Motion, CSS transitions, requestAnimationFrame
İkonlar: lucide-react
Barındırma (Hosting): Vercel
Versiyon Kontrolü: Git + GitHub
Proje Yapısı

yoga-sitesi/
├── app/
│   └── page.tsx          # Ana sayfa - hero, Pranayama bölümü, modal yönetimi
├── components/
│   ├── blocks/
│   │   ├── scroll-expansion-hero.tsx   # Scroll ile genişleyen hero medya bileşeni
│   │   ├── breathing-tree.tsx          # Anuloma Viloma - nefes ritmine göre dolan ağaç animasyonu
│   │   └── prana-mudra.tsx             # Prana Mudra - 5 aşamalı mudra geçiş animasyonu
│   └── ui/
│       └── flow-button.tsx             # Hover efektli, tıklanabilir buton bileşeni
└── public/
    └── images/            # Hero görseli ve nefes egzersizi aşama görselleri
Ana Özellikler

1. Hero Bölümü (scroll-expansion-hero.tsx)

Kullanıcı sayfayı kaydırdıkça ortadaki görsel/medya kutusu kademeli olarak büyüyüp ekranı kaplıyor. Framer Motion ile opacity ve boyut geçişleri yönetiliyor.

2. Anuloma Viloma Animasyonu (breathing-tree.tsx)

requestAnimationFrame tabanlı bir zamanlayıcı ile ağaç görselinin clip-path özelliği manipüle ediliyor.
4 saniye nefes alma (ağaç kökten yukarı dolar), 8 saniye nefes verme (boşalır) döngüsü.
Burun deliği geçiş talimatları dinamik olarak güncelleniyor.
3. Prana Mudra Animasyonu (prana-mudra.tsx)

5 aşamalı bir sequence dizisi üzerinden state makinesi mantığıyla ilerliyor (1→2→3→4→5→4→3→2→1).
Her aşama geçişinin kendi süresi var (hızlı/yavaş/orta) — FAST, SLOW, MEDIUM sabitleriyle yönetiliyor.
Sabit boyutlu container + object-contain ile görsel boyutları farklı olsa da sayfa kayması engelleniyor.
4. Modal Sistemi

useState ile yönetilen activeModal durumu, hangi nefes egzersizinin açık olduğunu kontrol ediyor. Tam ekran overlay + kapatma butonu.

Görsel İşleme

Kaynak görseller (ağaç ikonu, mudra aşama illüstrasyonları) arka planları şeffaflaştırılarak ve içeriğe göre sıkı kırpılarak (tight crop) hazırlandı; böylece animasyon sırasında tutarlı hizalama sağlandı.

Dağıtım (Deployment)

Proje GitHub'a push edildi, Vercel üzerinden GitHub reposu import edilerek otomatik CI/CD ile yayına alındı. Root Directory ayarı yoga-sitesi olarak yapılandırıldı (repo kökü ile proje kökü farklı olduğu için).

Öğrenilen / Kullanılan Kavramlar

React state yönetimi (useState, useEffect, useRef)
Component tabanlı mimari ve modülerlik
CSS animasyonları ve clip-path manipülasyonu
Git/GitHub iş akışı (init, add, commit, push, remote)
Next.js proje yapısı ve App Router
Vercel ile deployment süreci
