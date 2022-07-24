import EditContent from "../../../../components/dashboard/EditContent"
import EditCover from "../../../../components/dashboard/EditCover"
import EditLogo from "../../../../components/dashboard/EditLogo"
import Layout from "../../../../components/Layout"

const ManageContent = () => {
  return (
    <Layout>
      <section className="w-[90%] m-auto py-16 mt-[60px]">
          <h1 className="text-5xl font-bold mb-5">Your page content.</h1>
          <div className="flex flex-col md:flex-row">
            <EditContent/>
            
            <div className="flex flex-col w-full md:w-1/2">
              <EditLogo/>

              <EditCover/>
            </div>
          </div>
      </section>
    </Layout>
  )
}

export default ManageContent