/**
 * Resolves the human-readable `display` label for a stored code `value`
 * from any options array shaped as `{ display, value }[]`.
 *
 * @param {Array<{ display: string, value: any }>} options - The options list (single source of truth)
 * @param {any} code - The raw code stored in the database
 * @param {string} [fallback='—'] - What to show if the code is not found
 * @returns {string}
 *
 * @example
 *   labelOf(GENDER_OPTIONS, 'm')        // → 'Male'
 *   labelOf(PROGRAM_OPTIONS, 'ug')      // → 'Undergraduate'
 *   labelOf(DEPARTMENT_OPTIONS, 'CSE')  // → 'Computer Science Engineering'
 *   labelOf(BELONGS_TO, false)          // → 'No'
 *   labelOf(GENDER_OPTIONS, null)       // → '—'
 */

export const labelOf = (options, code, fallback = '—') => {

    if ( !code ) return fallback
    return options.find(opt => opt.value === code)?.display ?? fallback

}

