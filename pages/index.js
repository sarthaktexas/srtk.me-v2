import { useRouter } from 'next/router'

export default function RedirectPage({ ctx }) {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('https://sarthakmohanty.me');
    return;
  }
}

RedirectPage.getInitialProps = ctx => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: 'https://sarthakmohanty.me' });
    ctx.res.end();
  }
  return { };
}