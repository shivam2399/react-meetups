import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
    return (
        <>
         <Head>
            <title>{props.meetupData.title}</title>
            <meta name="description" content={props.meetupData.description} />
         </Head>
         <MeetupDetail
          image={props.meetupData.image}
          title= {props.meetupData.title}
          address= {props.meetupData.address}
          description= {props.meetupData.description}   
         />
        </>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://user123:testPass123@cluster0.ymw71.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close()

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({ 
            params: {meetupId: meetup._id.toString() }, 
        }))
    }
} 

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect('mongodb+srv://user123:testPass123@cluster0.ymw71.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
      });
    client.close()


    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.data.title,
                image: selectedMeetup.data.image,
                address: selectedMeetup.data.address,
                description: selectedMeetup.data.description,
              },
        }
    }
}
 

export default MeetupDetails;