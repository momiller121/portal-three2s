import type { PageServerLoad } from './$types'
import { PRETEND_SECRET } from '$env/static/private'

export const load = (async ({ url, cookies, request }) => {

    const mapHeaders = () => {

        const h = [];
        for (const header of request.headers.entries()) {
            h.push({ name: header[0], value: header[1] });
        }
        return h;
    }
    const c = cookies.getAll()

    console.log(c);
    return {
        host: url.host,
        renderedTS: new Date().getTime(),
        headers: mapHeaders(),
        cookies: c,
        pretendSecret: PRETEND_SECRET
    }
}) satisfies PageServerLoad