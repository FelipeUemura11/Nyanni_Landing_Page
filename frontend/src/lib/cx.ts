type ClassValue = string | false | null | undefined;

/** Junta classes condicionais: cx('a', cond && 'b') */
export function cx(...values: ClassValue[]): string {
    return values.filter(Boolean).join(" ");
}
