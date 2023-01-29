import LayoutComponent from "../components/Layout"
import getAllDocs from "../services/getAllDocs"
import '/index.css';

const Layout = async ({ children }) => {
  const links = await getAllDocs();

  return (
    <html>
      <head></head>
    <body>
      <LayoutComponent links={links}>{children}</LayoutComponent>
    </body>
    </html>
  )
}

export default Layout