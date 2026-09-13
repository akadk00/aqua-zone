# Colori del logo Aqua-Zone

Valori **misurati direttamente** sui pixel dei file originali
(`foto/Logo Ufficiale/Logo.png` e `vecchi/Aqua - Zone/1.png`), non stimati a occhio.

## Digitale — usa questi sul sito e su qualsiasi schermo

| Elemento                          | HEX       | RGB           |
|-----------------------------------|-----------|---------------|
| Rosso "A" / "Z" / firma           | `#F60606` | 246, 6, 6     |
| Ciano dell'onda                   | `#07D7F3` | 7, 215, 243   |
| Grigio "qua/one" — versione chiara| `#545454` | 84, 84, 84    |
| Bianco "qua/one" — versione scura | `#FFFFFF` | 255, 255, 255 |

```css
:root{
  --az-rosso:  #F60606;
  --az-ciano:  #07D7F3;
  --az-grigio: #545454;
}
```

## RAL — per stampa, verniciatura, targhe, pellicole, insegne

RAL è uno standard **fisico** (mazzette di colore reale), non digitale: le equivalenze
qui sotto sono le più vicine possibili, calcolate in spazio CIELAB sui valori sRGB
pubblicati dei RAL Classic. `ΔE` = distanza percettiva: sotto 2 la differenza è
quasi invisibile, sopra 10 sono due colori diversi.

| Elemento | RAL consigliato | ΔE | Giudizio |
|---|---|---|---|
| Rosso `#F60606`  | **RAL 3024 — Rosso brillante** (`#F70000`) | 1.8 | ottimo, praticamente identico |
| Grigio `#545454` | **RAL 7043 — Grigio traffico B** (`#4E5451`) | 3.3 | buono |
| Bianco `#FFFFFF` | **RAL 9016 — Bianco traffico** (`#F7FBF5`) | 3.8 | buono (o RAL 9003 Bianco segnale, identico come distanza) |
| Ciano `#07D7F3`  | RAL 6027 — Verde chiaro (`#81C0BB`) | **25.9** | ⚠️ **non esiste un RAL equivalente** |

### Attenzione al ciano
Il ciano dell'onda è più saturo di qualunque colore della gamma RAL Classic:
la corrispondenza migliore sbaglia di ΔE 26, cioè si vede benissimo che è un altro colore
(RAL 6027 è un verde-azzurro spento, non un ciano acceso).

Per riprodurre l'onda su un supporto fisico, tre strade:
1. **stampa in quadricromia / pellicola stampata** partendo da `#07D7F3` — è la scelta giusta
   per targhe, adesivi e insegne, e mantiene il colore fedele;
2. una pellicola adesiva **tinta unita** di un marchio che copre i ciano accesi
   (es. le serie "azzurro brillante" di Oracal / Avery) — da scegliere su campione fisico;
3. se il RAL è obbligatorio, ripiegare su **RAL 5018 Blu turchese** e accettare
   un marchio visibilmente più spento.

### Alternative di secondo livello
- Rosso: RAL 3026 Rosso chiaro brillante (ΔE 4.5) se serve un rosso più acceso.
- Grigio: RAL 7015 Grigio ardesia (ΔE 4.2), leggermente più freddo.

> Prima di ordinare verniciature o pellicole, conferma sempre su **mazzetta fisica**:
> nessuna conversione a schermo sostituisce il campione reale.
