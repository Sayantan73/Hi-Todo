import { useEffect, useState } from 'react';
import './App.css'


function App() {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const [formData, setFormData] = useState({ title: "", description: "" })
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  function changeHandler(event) {
    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  async function fetchData() {
    setLoading(true)
    try {
      const output = await fetch(`${baseUrl}/getTodo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = await output.json();
      // console.log("tha data is: ", data);
      setTodos(data.reverse())
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }

  }
  async function postData(data) {
    try {
      const output = await fetch(`${baseUrl}/createTodo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!output.ok) {
        throw new Error('Failed to create todo.');
      }
      const newTodo = await output.json();
      // console.log("tha created data is: ", newTodo);
      await fetchData()
    } catch (error) {
      console.log(error.message);
    }

  }

  function deleteHandler(id) {
    // event.preventDefault();
    async function dataDelete(id) {
      try {
        const output = await fetch(`${baseUrl}/deleteTodo/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (!output.ok) {
          throw new Error('Failed to delete todo.');
        }
        // console.log("successfully deleted the todo: ", id)
        await fetchData();
      } catch (error) {
        console.log(error.message);
      }
    }
    dataDelete(id)
  }


  async function submitHandler(e) {
    e.preventDefault();
    // console.log(formData);
    await postData(formData)
    setFormData({ title: "", description: "" })
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <div className='max-w-[600px]'>
        <div>
        <h1 className='mb-5 font-mono animate-pulse'>Hi Todo</h1>
          <form onSubmit={submitHandler} method="post">
            <div className='flex justify-around w-[600px]'>
              <input type="text" name="title" id="title" placeholder='Enter title' onChange={changeHandler} value={formData.title} className='px-1 py-2 rounded-md border' />
              <input type="text" name="description" id="description" placeholder='Enter description' onChange={changeHandler} value={formData.description} className='px-1 py-2 rounded-md border' />
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className='mt-5'>
          {loading ? (
            <p>Loading todos...</p>
          ) :
            todos.length > 0 ? 
            (
              todos.map((todo) => (
                <div key={todo._id} className='m-5 p-4 bg-slate-200 rounded shadow-lg flex justify-between items-center'>
                  <div className='mr-3 p-2'>
                    <p className='text-xl font-bold mb-2'>{todo.title}</p>
                    <p>{todo.description}</p>
                  </div>
                  <div>
                    <button onClick={() => { deleteHandler(todo._id) }}>delete</button>
                  </div>
                </div>
              ))
            ) : (<p className='m-5 p-4 bg-slate-200 rounded shadow-md'>Please create a new Todo</p>)
          }
        </div>
      </div>
    </>
  )
}


export default App
