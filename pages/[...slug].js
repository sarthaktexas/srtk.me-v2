import { useRouter } from 'next/router'

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
  baseID: 'appBvGPkuEqXTN7UM',
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: 'Links',
});

export default function RedirectPage(res) {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    router.push(res.redirectUrl);
    return;
  }
}

RedirectPage.getInitialProps = async (ctx) => {
  if (ctx.res) {
    let slug = ctx.query.slug;
    if (slug[0] !== 'favicon.ico') {
      const shortUrl = slug[0];
      const params = slug.splice(1).toString().replace(/,/g, '/');
      const url = await airtable.read({
        filterByFormula: `Slug = "${shortUrl}"`,
        maxRecords: 1
      });
      if (url.length) {
        let urlToRedirect = url[0].fields.destination + '/' + params;
        ctx.res.writeHead(303, { Location: urlToRedirect });
        ctx.res.end();
        return {
          redirectUrl: urlToRedirect
        }
      }
      if (!url.length) {
        ctx.res.writeHead(302, { Location: '/404' });
        ctx.res.end();
        return {
          redirectUrl: '/404'
        }
      }
    } else return { redirectUrl: '/404' }
  }
  return { redirectUrl: '/404' };
}