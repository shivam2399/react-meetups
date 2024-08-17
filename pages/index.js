import Head from "next/head";
import MeetupList from "@/components/meetups/MeetupList"
import { MongoClient } from "mongodb";


const HomePage = (props) => {
    
    return (
        <>
         <Head>
            <title>React Meetups</title>
            <meta name="description" content="Browse a list of highly active React meetups" />
         </Head>
         <MeetupList meetups={props.meetups} />
        </>
     
  )
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://user123:testPass123@cluster0.ymw71.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.data.title,
                address: meetup.data.address,
                image: meetup.data.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    }
}


export default HomePage;
