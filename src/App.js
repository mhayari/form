import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container mt-5'>
    <h2 >Contact Me!</h2>
      <form className='row g-3'>
          <div className='col-md-6'>
            <label for='firstName' className='form-label'>First Name</label>
            <input type='text' className='form-control' id='firstName' required/>
        </div>
          <div className='col-md-6'>
            <label for='lastName' className='form-label'>Last Name</label>
            <input type='text' className='form-control' id='lastName' required/>
        </div>
          <div className='col-md-8'>
            <label for='emailInfo' className='form-label'>E-mail</label>
            <input type='email' className='form-control' id='emailInfo' required/>
        </div>
          <div className='col-md-4'>
            <label for='phoneNumber' className='form-label'>Phon Number</label>
            <input type='text' className='form-control' id='phoneNumber' placeholder='212 xx xx xx'/>
        </div>
          <div className='col-md-12'>
            <label for='comments' className='form-label'>Comments</label>
            <textarea type='text' className='form-control' id='comments' row='3'></textarea>
          </div>
          <div className='col-md-12'>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
      </form>
      </div>
    </div>
  );
}

export default App;
