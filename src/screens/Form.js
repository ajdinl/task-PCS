const Form = ({ handleLogin }) => {
  return (
    <div>
      <form
        style={{ width: '50%', margin: '0 auto' }}
        onSubmit={(e) => handleLogin(e)}
      >
        <input type='email' required />
        <input type='password' required />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Form
