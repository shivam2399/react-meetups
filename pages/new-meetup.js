import { useRouter } from "next/router"
import Head from "next/head"
import NewMeetupForm from "@/components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    const router = useRouter()
    async function addMeetupHandler (enteredMeetupData) {
        const response = await fetch('/api/new-meetup', { 
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)
        router.push('/')
    }

    return (
        <>
         <Head>
            <title>Add new meetup</title>
            <meta name="description" content="Browse a list of highly active React meetups" />
         </Head>
         <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
        
    )
}

export default NewMeetupPage