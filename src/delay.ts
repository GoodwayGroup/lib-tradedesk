/**
 * Create a delay promise
 *
 * @internal
 */
export default async function delay<T>(ms: number): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    });
}