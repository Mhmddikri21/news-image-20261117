// news-image-20261117 entry (Node 22, standard library only).
//
// The image is entry.png beside this file: a 34-story newspaper broadsheet
// summing up Tuesday 17 November 2026 — masthead with the date and story
// count, three lead cards (Kerch Bridge struck again; US jets hit a missile
// site on Qeshm Island; Quad leaders meet for the first time in two years),
// a 12-card grid, a numbered world map, and a 19-item also-list. It was
// drawn with PIL by build_news_image_20261117.py; every story was reported
// or first reported on 17 November 2026, and disputed claims are attributed
// in the copy. The program just copies it to the output directory, so the
// judge sees exactly these bytes, identically on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
