import type { PageServerLoad } from './$types'

export const load = (async ({ url, cookies, request }) => {

    const mapHeaders = () => {

        const h = [];
        for (const header of request.headers.entries()) {
            h.push(header);
        }
        return h;
    }
    const c = cookies.getAll()

    console.log(c);
    return {
        host: url.host,
        renderedTS: new Date().getTime(),
        headers: mapHeaders(),
        cookies: c
    }
}) satisfies PageServerLoad