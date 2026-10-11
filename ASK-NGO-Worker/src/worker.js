export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    // For HTML5 history API routing, serve index.html for any GET request
    // that doesn't match a static asset
    if (request.method === 'GET') {
      try {
        const response = await env.ASSETS.fetch(request)
        // If we get a 404, fall through to serve index.html
        if (response.status === 404) {
          const index = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`))
          return index
        }
        return response
      } catch (e) {
        // If asset not found, serve index.html for client-side routing
        return env.ASSETS.fetch(new Request(`${url.origin}/index.html`))
      }
    }
    // For non-GET requests, try assets
    try {
      return await env.ASSETS.fetch(request)
    } catch (e) {
      return new Response('Not Found', { status: 404 })
    }
  }
}