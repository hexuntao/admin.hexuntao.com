/**
 * @file clipboard service
 * @module service.clipboard
 *
 */

export const read = () => navigator.clipboard.readText()
export const copy = (text: string) => navigator.clipboard.writeText(text)
