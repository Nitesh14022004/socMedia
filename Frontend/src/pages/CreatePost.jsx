import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        try {
            const res = await axios.post('http://localhost:3000/create-post', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })

            if (res.status < 200 || res.status >= 300) throw new Error('Network response was not ok')
            navigate('/feed')
        } catch (err) {
            console.error(err)
            alert('Error creating post')
        }
    }

    return (
        <section className='create-post-section'>
            <h1> Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input type='file' name='image' accept='image/*' />
                <input type='text' name='caption' placeholder='Enter caption' required />
                <button type='submit'>submit</button>
            </form>
        </section>
    )
}

export default CreatePost