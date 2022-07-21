const ManageContent = () => {
  return (
    <div className="py-16 mt-[60px]">
        <h1>Manage Content</h1>
        <form>
            <label>Landing page title</label>
            <input type="text" placeholder="Who is" name="firstLine"/>
            <label>Landing page description</label>
            <input type="text" placeholder="I am an amazing person hurray." name="landingDescription"/>
        </form>
    </div>
  )
}

export default ManageContent