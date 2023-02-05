import Head from 'next/head'

// propsの型定義
interface Props {
  title: string,
  description: string
}

export function HeadTag(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex"></meta>
        <meta property="og:url" content="" />
        <meta property="og:title" content={props.title} />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content={props.description} />
        {/* <meta property="og:type" content="website" />
        <meta property="og:image" content='/assets/img/ogp.png' />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
    </>
  );
}