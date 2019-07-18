export function sortNotes(
  note1: { note: number },
  note2: { note: number }
): number {
  return note2.note - note1.note
}
