# W88 Game APK — w88game.com.pk

Next.js site cloned from the **cardrummyapp.com.pk** design system and page IA, rebranded for **W88 Game**.

## Run

```bash
npm install
npm run dev
# or
npm run build && npm run start
```

## Replace placeholder images

Temporary placeholders are already in `public/`. Replace these files with your real assets (same filenames):

### Required
- `favicon.ico`
- `w88-game.webp` (hero / main app image)
- `w88-game-logo.webp`
- `w88-game-screenshot1.webp` … `w88-game-screenshot8.webp` (portrait)
- `w88-game-game-interface.webp`
- `w88-game-games.webp`
- `w88-game-earn-bonus.webp`
- `w88-game-add-money.webp`
- `w88-game-withdraw-money.webp`
- `w88-game-refer-and-earn.webp`
- `w88-game-recharge-rebate.webp`
- `w88-game-bind-mail.webp`
- `feature/og-image.webp` (1200×630)
- `feature/og-image-square.webp`
- `feature/twitter-card.webp`

## Config

`.env.local`:
- `NEXT_PUBLIC_DOWNLOAD_URL` — real APK / offer link
- `NEXT_PUBLIC_GSC_VERIFICATION` — Search Console (optional)

## Pages (28 content URLs + API)

Mirrors cardrummyapp.com.pk:
Home, Download, Deposit, Withdraw, PC Version, About, Contact, Privacy, Disclaimer, Blog index, and 20 blog posts.
