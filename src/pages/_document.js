import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import Helmet from "react-helmet";
import { ServerStyleSheet } from "styled-components";
import getConfig from "next/config";
import analyticsProviders from "../custom/analytics";
import favicons from "../custom/favicons";

const { publicRuntimeConfig } = getConfig();

/**
 * For details about the styled-components SSR code in this file, see https://www.styled-components.com/docs/advanced#nextjs
 * _document is only rendered on the server side and not on the client side.
 * Event handlers like onClick can't be added to this file.
 */
class HTMLDocument extends Document {
  static getInitialProps(ctx) {
    // Render app and page and get the context of the page with collected side effects.
    let pageContext;

    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App) => {
      const WrappedComponent = (props) => {
        // eslint-disable-next-line prefer-destructuring
        pageContext = props.pageContext;

        return sheet.collectStyles(<App {...props} />);
      };

      WrappedComponent.propTypes = {
        pageContext: PropTypes.object.isRequired
      };

      return WrappedComponent;
    });

    const styledComponentsStyleTags = sheet.getStyleElement();

    return {
      ...page,
      pageContext,
      helmet: Helmet.rewind(),
      styles: (
        <Fragment>
          <style
            id="jss-server-side"
            // pageContext is undefined when there was an Apollo network error. Avoid extra errors
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: pageContext ? pageContext.sheetsRegistry.toString() : "" }}
          />
          {flush() || null}
        </Fragment>
      ),
      styledComponentsStyleTags
    };
  }

  render() {
    const { helmet, pageContext, styledComponentsStyleTags } = this.props;
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const links = [
      { rel: "canonical", href: publicRuntimeConfig.canonicalUrl },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" },
      ...favicons
    ];
    const meta = [
      // Use minimum-scale=1 to enable GPU rasterization
      {
        name: "viewport",
        content: "user-scalable=0, initial-scale=1 minimum-scale=1, width=device-width, height=device-height"
      }
    ];

    // PWA primary color
    // pageContext is undefined when there was an Apollo network error. Avoid extra errors
    if (pageContext) {
      meta.push({ name: "theme-color", content: pageContext.theme.palette.primary.main });
    }

    // Analytics & Stripe Elements scripts
    const scripts = [
      ...analyticsProviders.map((provider) => ({
        type: "text/javascript",
        innerHTML: provider.renderScript()
      })),
      {
        type: "text/javascript",
        src: "https://js.stripe.com/v3/"
      }
    ];

    return <html lang="en" {...htmlAttrs}>
      <Head>
        <Helmet htmlAttributes={{ lang: "en", dir: "ltr" }} />
        {meta.map((tag, index) => <meta key={index} {...tag} />)}
        {links.map((link, index) => <link key={index} {...link} />)}
        {helmet.base.toComponent()}
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
        {styledComponentsStyleTags}
         <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="/static/css/animate.css"/>
        <link rel="stylesheet" href="/static/css/owl.carousel.min.css"/>
        <link rel="stylesheet" href="/static/css/owl.theme.default.min.css"/>
        <link rel="stylesheet" href="/static/css/magnific-popup.css"/>
        <link rel="stylesheet" href="/static/css/flaticon.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>      

        
      </Head>
      <body>
        <Main />
        <NextScript />
        {scripts.map((script, index) => (script.innerHTML ? /* eslint-disable-next-line */
          <script async key={index} type={script.type} dangerouslySetInnerHTML={{ __html: script.innerHTML }} /> : <script async key={index} {...script} />))
          }
          <script src="/static/js/jquery.min.js"></script>
        <script src="/static/js/jquery-migrate-3.0.1.min.js"></script>
        <script src="/static/js/popper.min.js"></script>
        <script src="/static/js/bootstrap.min.js"></script>
        <script src="/static/js/jquery.easing.1.3.js"></script>
        <script src="/static/js/jquery.waypoints.min.js"></script>
        <script src="/static/js/jquery.stellar.min.js"></script>
        <script src="/static/js/jquery.animateNumber.min.js"></script>
        <script src="/static/js/owl.carousel.min.js"></script>
        <script src="/static/js/jquery.magnific-popup.min.js"></script>
        <script src="/static/js/scrollax.min.js"></script>
        <script src="/static/js/main.js"></script> 
      </body>
    </html>;
  }
}

export default HTMLDocument;
