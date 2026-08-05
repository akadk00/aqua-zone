# Aqua Zone — Sito (prototipo)

Rinnovo del sito aqua-zone.ch: single-page moderna con animazioni, 4 lingue (IT/DE/FR/EN) e design intuitivo.

## Come aprirlo
- **Veloce:** doppio clic su `index.html` (si apre nel browser).
- **Consigliato** (così carica tutto correttamente): apri un terminale in questa cartella e lancia un server locale, poi vai su http://localhost:8000
  ```
  python3 -m http.server 8000
  ```

## Anteprima online
**https://akadk00.github.io/aqua-zone/**

Pubblicata con GitHub Pages dal branch `main` (repo `akadk00/aqua-zone`).
Ogni `git push` su `main` aggiorna il sito dopo circa un minuto.

La pagina ha un `noindex` nell'`<head>`: **non** finisce nei motori di ricerca,
così non fa concorrenza al sito vero. Va tolto quando si va online per davvero.

## File
- `index.html` — struttura e contenuti
- `styles.css` — grafica e animazioni
- `app.js` — switch lingue, animazioni, form contatti
- `servizio.html` + `servizio.js` — pagina di dettaglio dei servizi (`servizio.html?s=koi`, `bio`, `pool`, `reno`, `filter`, `maint`)

## Form contatti — ATTIVAZIONE NECESSARIA
Il form invia le richieste a **aquazone.ch@gmail.com** tramite [FormSubmit](https://formsubmit.co)
(servizio gratuito, nessun account da creare).

**Prima di pubblicare, va fatto una volta sola:**
1. Mettere il sito online (il form non funziona aperto come file locale).
2. Compilare e inviare il form una prima volta.
3. FormSubmit manda un'email di conferma a aquazone.ch@gmail.com: **cliccare il link di attivazione**.
4. Da quel momento tutte le richieste arrivano in casella. Rifare una prova per conferma.

Finché il passo 3 non è fatto, gli invii **non vengono recapitati**.

Note:
- I dati del form transitano dai server di FormSubmit (terza parte). Se si preferisce evitarlo,
  l'alternativa è un piccolo script di invio lato server sull'hosting del sito.
- Dopo l'attivazione, su FormSubmit si può generare un codice alias per non lasciare
  l'indirizzo email in chiaro dentro `app.js` (utile contro lo spam).

## Foto
Le immagini stanno nella cartella `img/` e sono **provvisorie**: vanno sostituite
con le foto reali dei lavori di Fabio. Per sostituirle basta rimpiazzare i file
mantenendo gli stessi nomi — non serve toccare il codice.

| file | dove compare |
|---|---|
| `hero.jpg` | sfondo grande in cima alla home |
| `about.jpg` | sezione "Chi siamo" |
| `card-koi/bio/pool/reno/filter/maint.jpg` | le 6 schede dei servizi (e la testata della relativa pagina) |
| `g1…g6.jpg` | le 6 immagini della galleria "Realizzazioni" |

Nota: prima le foto venivano prese al volo da LoremFlickr, che ha **smesso di
funzionare** (le immagini erano tutte rotte). Ora sono file locali presi da
Wikimedia Commons, a licenza libera. `g3` e `g5` ripetono due foto già usate
nelle schede: sono i due punti più deboli, i primi da sostituire.

## Note (per il sito finale)
- Le traduzioni DE/FR/EN sono da rileggere prima della pubblicazione.
- I numeri in cima alla home (30+ anni, 250+ laghetti, 100% su misura) sono
  segnaposto: vanno confermati con Fabio prima di pubblicare.
