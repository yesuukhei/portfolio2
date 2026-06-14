export type TextPart =
  | { type: 'text'; value: string }
  | { type: 'link'; label: string; href: string }

const markdownLinkPattern =
  /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g

const bareUrlPattern =
  /https?:\/\/[^\s<]+[^\s<.,;:!?'")\]}]/g

const domainPattern =
  /\b([a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.(?:com|mn|io|dev|org|net|co|app|me))\b/gi

type LinkMatch = {
  start: number
  end: number
  label: string
  href: string
}

function isSafeHref(href: string) {
  return /^https?:\/\//.test(href)
}

export function parseTextWithLinks(text: string): TextPart[] {
  const parts: TextPart[] = []
  let cursor = 0

  const markdownMatches = [...text.matchAll(markdownLinkPattern)]

  for (const match of markdownMatches) {
    const index = match.index ?? 0
    const label = match[1]
    const href = match[2]

    if (!label || !href || !isSafeHref(href)) continue

    if (index > cursor) {
      parts.push(...parseInlineLinks(text.slice(cursor, index)))
    }

    parts.push({ type: 'link', label, href })
    cursor = index + match[0].length
  }

  if (cursor < text.length) {
    parts.push(...parseInlineLinks(text.slice(cursor)))
  }

  return parts.length ? parts : [{ type: 'text', value: text }]
}

function parseInlineLinks(text: string): TextPart[] {
  const matches: LinkMatch[] = []

  for (const match of text.matchAll(bareUrlPattern)) {
    const start = match.index ?? 0
    matches.push({
      start,
      end: start + match[0].length,
      label: match[0],
      href: match[0],
    })
  }

  for (const match of text.matchAll(domainPattern)) {
    const label = match[1] ?? match[0]
    const start = match.index ?? 0
    const end = start + match[0].length
    const href = `https://${label.toLowerCase()}`

    if (matches.some(({ start: s, end: e }) => start >= s && start < e)) continue

    matches.push({ start, end, label, href })
  }

  matches.sort((a, b) => a.start - b.start)

  const filtered: LinkMatch[] = []
  for (const match of matches) {
    const last = filtered[filtered.length - 1]
    if (last && match.start < last.end) continue
    filtered.push(match)
  }

  const parts: TextPart[] = []
  let cursor = 0

  for (const match of filtered) {
    if (match.start > cursor) {
      parts.push({ type: 'text', value: text.slice(cursor, match.start) })
    }

    parts.push({ type: 'link', label: match.label, href: match.href })
    cursor = match.end
  }

  if (cursor < text.length) {
    parts.push({ type: 'text', value: text.slice(cursor) })
  }

  return parts.length ? parts : [{ type: 'text', value: text }]
}
