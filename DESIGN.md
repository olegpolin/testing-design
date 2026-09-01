# Design

Visual language for this site, distilled from the Bauhaus board on Savee
(https://savee.com/olegpolin/boards/bauhaus/). Tokens live in `src/routes/layout.css`.

## Principles

- **Form follows function.** Every shape carries content, directs the eye, or divides space. No decoration.
- **Three shapes, three colours.** Circle, triangle, square. Yellow, blue, red. Black is structure; cream is ground.
- **Asymmetry held in tension.** Elements sit off-centre, balanced by a thick rule or one large counterweight shape. Never centre-stack a hero.
- **Big against small.** One huge element per section, everything else small and precise.
- **Type is a graphic element.** It may rotate, track wide, or overlap a shape, but it stays legible.
- **Flat.** No shadows, gradients, blur, or rounded corners. Depth comes only from overlap and colour.
- **Restraint.** Sections are 60% or more empty.

## Colour

| Token | Role | Light | Dark |
|---|---|---|---|
| `paper` / `background` | Page ground | warm cream `#F1E7D0` | near-black `#0E0F14` |
| `fog` / `card` | Alternate ground | cool grey `#EDEDED` | `#1A1C24` |
| `ink` / `foreground` | Text, rules, structural blocks | `#15171E` | cream `#F1E7D0` |
| `bauhaus-red` / `primary` | Square. Primary action | `#E3391C` | `#F0563A` |
| `bauhaus-blue` / `secondary` | Circle. Links, secondary action | `#1F4EB5` | `#4C79E0` |
| `bauhaus-yellow` / `accent` | Triangle. Highlight, hero counterweight | `#F2B705` | `#F7C531` |

Rules:

- Ground is ~70% of any viewport, black ~15%, one dominant primary ~10%, the other two ~5% combined.
- Text on paper or fog is ink. Text on ink, red, or blue is white. Text on yellow is ink, never white.
- Red and blue never touch. Separate them with ink, ground, or yellow.
- Dark mode is inverted paper, not grey. Shapes stay saturated.

## Typography

- **Display:** Jost (Futura geometry). Uppercase, tracked `0.08–0.2em`, line-height `0.9–1.0`. Or lowercase, tight, for wordmarks.
- **Body and UI:** Inter. Left-aligned, ragged right, max 60ch. Never justified.
- **Labels:** uppercase, `0.75rem`, tracked `0.15em`, ink.
- Headlines are uppercase or lowercase, never Title Case.
- One display face per page. Grey text is not a hierarchy tool; use size, weight, and tracking.
- Links underline with a 2px ink rule offset 4px.

Scale (ratio ~1.5): display `clamp(4rem, 12vw, 11rem)`, h1 `clamp(2.5rem, 6vw, 4.5rem)`, h2 `2rem`, h3 `1.25rem`, body `1rem–1.125rem`, small `0.75rem`.

## Shape and space

- Primitives: circle, square, triangle, and the rule (8–24px ink). Half-circles and quarter-arcs are permitted crops.
- Canonical mapping, pick one per page: yellow triangle / blue circle / red square, or yellow circle / blue bar / red square.
- 12-column grid, max width 1440px, page margin `clamp(1.5rem, 5vw, 6rem)`.
- Sections divide with an 8px full-bleed ink rule rather than a background change.
- Shapes may overlap text by up to 20% of the text box. Text stays on top.
- 8px spacing base. Section padding `clamp(4rem, 10vw, 10rem)`.
- Radius is 0 everywhere except circles. Borders are 2px ink or none. No box-shadow.
- Below 768px: vertical rules move to the page margin, rotated text becomes horizontal, shapes scale with `vw`.

## Components

- **Button.** Primary: red block, white uppercase tracked label. Secondary: 2px ink outline. Hover is an instant colour swap to ink or yellow.
- **Nav.** Lowercase wordmark left, uppercase tracked links right, full-bleed 8px ink rule beneath.
- **Card.** No radius, no shadow. 2px ink border or fog ground. One primitive as icon.
- **Input.** 2px ink bottom border only. Focus: 2px blue, square, no offset.
- **Footer.** Ink ground, cream text, the three-shape triad as a signature.

## Motion

Mechanical, not organic. 120–240ms, `cubic-bezier(0.2, 0, 0, 1)`, no bounce. Shapes move in 90° steps if at all. Hover states swap instantly. Honour `prefers-reduced-motion`.

## Don't

- Round corners, add shadows, gradients, or glassmorphism.
- Centre-align a hero.
- Use pastel or desaturated primaries.
- Add illustration, soft-edged photography, or emoji. Photos are hard-masked into a primitive.
- Use more than one display face.
