export class NoteUnavailableException extends Error {
  constructor(message?: string) {
    super()

    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
    this.name = NoteUnavailableException.name // stack traces display correctly now
    this.message = message
  }
}

export class InvalidArgumentException extends Error {
  constructor(message?: string) {
    super()

    Object.setPrototypeOf(this, new.target.prototype)
    this.name = InvalidArgumentException.name
    this.message = message
  }
}
