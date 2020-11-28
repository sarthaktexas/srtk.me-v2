import { useRouter } from 'next/router'

export default function BlankPageForTesting() {
  return (
    <div>YOLO nothing here!</div>
  )
}

// export default function RedirectPage({ ctx }) {
//   const router = useRouter()
//   if (typeof window !== 'undefined') {
//     router.push('https://sarthakmohanty.me');
//     return;
//   }
// }

// RedirectPage.getInitialProps = ctx => {
//   if (ctx.res) {
//     ctx.res.writeHead(302, { Location: 'https://sarthakmohanty.me' });
//     ctx.res.end();
//   }
//   return { };
// }