# Login Formu E2E Testi

Vite + React ile hazırlanmış bir login formu ve Cypress E2E testleri.

## Özellikler

- Login formu: email, şifre ve "Şartları kabul ediyorum" alanları
- Validasyonlar: geçerli email, güçlü şifre (en az 8 karakter; büyük harf, küçük harf, rakam ve özel karakter) ve şartların kabulü
- Tüm validasyonlar geçince giriş butonu aktif olur ve `/success` sayfası açılır

## Kurulum

```bash
npm install
npm run dev
```

## Testler

Uygulama `npm run dev` ile çalışırken:

```bash
npm run cy:open   # Cypress arayüzü
npm run cy:run    # Terminalde çalıştırma
```

Test senaryoları `cypress/e2e/login.cy.js` dosyasında.
