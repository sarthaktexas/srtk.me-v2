import { useRouter } from 'next/router'
const Airtable = require('airtable')
const AirtablePlus = require('airtable-plus');

// var base = new Airtable({
//     apiKey: process.env.AIRTABLE_KEY || 'keyCJ5064D1DsDng4',
//   }).base('appBvGPkuEqXTN7UM');

const airtable = new AirtablePlus({
  baseID: 'appBvGPkuEqXTN7UM',
  apiKey: process.env.AIRTABLE_KEY || 'keyCJ5064D1DsDng4',
  tableName: 'Links',
});

export default function RedirectPage(url) {
  return <p>{ url[0].fields.destination || '404' }</p>
}

RedirectPage.getInitialProps = async ({ query: { slug } }) => {
  if (slug[0] !== 'favicon.ico') {
    const shortUrl = slug[0];
    const params = slug.splice(1).toString().replace(/,/g, '/');
    const url = await airtable.read({
      filterByFormula: `Slug = "${shortUrl}"`,
      maxRecords: 1
    });`
    console.log(url);
    return url
  } else return '/404'
    // if (ctx.res) {
    //   ctx.res.writeHead(302, { Location: redirectUrl });
    //   ctx.res.end();
    // }
    // return { };
  }