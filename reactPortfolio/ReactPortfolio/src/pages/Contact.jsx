import{useState} from "react";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const {input, value} = e.target;

        if(input === "name"){
            return setName(value);
        }
        else if(input === "email"){
            return setEmail(value);
        }
        else if(input === "message"){
            return setMessage(value)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // TODO: have it send me an email when someone submits
        setEmail('');
        setName('');
        setMessage('');
    }
    return (
        <div>
            <h1> Contact</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    input="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    input="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="email"
                />
                <input
                    value={message}
                    input="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
