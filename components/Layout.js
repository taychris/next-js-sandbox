import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="mt-[60px]">
          {children}
      </main>
    </>
  )
}

export default Layout