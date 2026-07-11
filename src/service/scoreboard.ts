export interface ScoreEntry {
  id: string
  player_name: string
  score: number
  client_id: string
  country: string
}

const scores: ScoreEntry[] = []

export function getTopScores(): ScoreEntry[] {
  return [...scores]
    .sort((a, b) => b.score - a.score)
    .slice(0, 25)
}

export function upsertScore(entry: Omit<ScoreEntry, "id"> & { id?: string }) {
  const existing = scores.find(
    (s) => s.player_name === entry.player_name && s.country === entry.country
  )

  if (existing && entry.score <= existing.score) {
    return
  }

  if (existing) {
    existing.score = entry.score
    existing.client_id = entry.client_id
    return
  }

  scores.push({
    id: entry.id ?? crypto.randomUUID(),
    player_name: entry.player_name,
    score: entry.score,
    client_id: entry.client_id,
    country: entry.country
  })
}
